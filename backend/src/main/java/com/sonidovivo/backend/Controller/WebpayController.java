package com.sonidovivo.backend.Controller;

import java.io.IOException;
import java.util.UUID;

import com.sonidovivo.backend.DTO.ItemRequest;
import com.sonidovivo.backend.DTO.WebpayRequest;
import com.sonidovivo.backend.Model.ItemOrden;
import com.sonidovivo.backend.Model.Orden;
import com.sonidovivo.backend.Model.Product;
import com.sonidovivo.backend.Repository.OrdenRepository;
import com.sonidovivo.backend.Repository.ProductRepository;
import com.sonidovivo.backend.Service.OrdenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sonidovivo.backend.Entities.CaptureRequest;
import com.sonidovivo.backend.Entities.TransactioRequest;
import com.sonidovivo.backend.Entities.TransbankProperties;

import cl.transbank.common.IntegrationType;
import cl.transbank.webpay.common.WebpayOptions;
import cl.transbank.webpay.exception.TransactionCaptureException;
import cl.transbank.webpay.exception.TransactionCommitException;
import cl.transbank.webpay.exception.TransactionCreateException;
import cl.transbank.webpay.exception.TransactionStatusException;
import cl.transbank.webpay.webpayplus.WebpayPlus.Transaction;
import jakarta.annotation.PostConstruct;


@RestController
public class WebpayController {

    @Autowired
    private TransbankProperties trasnbankProperties;

    static final String LOCAL_ADDRESS = "http://localhost:8080";
    static final String TOKEN_KEY = "token_ws";



    private WebpayOptions webpayOptions;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrdenRepository ordenRepository;
    @Autowired
    private OrdenService ordenService;

    @PostConstruct
    public void init(){
        webpayOptions = new WebpayOptions(
                trasnbankProperties.getCommerceCode(),
                trasnbankProperties.getApiKey(),
                IntegrationType.TEST
        );
    }

    private static final double IVA = 0.19;

    @CrossOrigin(origins = LOCAL_ADDRESS)
    @PostMapping("/api/webpay")
    public  ResponseEntity<Object> createTransaction(
            @RequestBody WebpayRequest request) {
        try {
            if (request.getItems() == null || request.getItems().isEmpty()) {
                throw new IllegalArgumentException("Carrito Vacio");
            }

            long total = 0;
            for (ItemRequest item : request.getItems()) {
                if (item.getCantidad() <= 0) {
                    throw new IllegalArgumentException("Cantidad Invalida");
                }
                Product p = productRepository.findById(item.getProductId())
                        .orElseThrow(() -> new IllegalArgumentException("Producto no existe: " + item.getProductId()));
                if (p.getStock() < item.getCantidad()) {
                    throw new IllegalArgumentException("Stock insuficiente para " + p.getNombre());
                }
                total += (long) p.getPrecio() * item.getCantidad();
            }
            String buyOrder = "0" + System.currentTimeMillis();
            String sessionId = UUID.randomUUID().toString().substring(0, 20);
            String returnUrl = "http://localhost:3000/result";

            long subtotal = total;
            long iva = Math.round(subtotal * IVA);
            long bruto = subtotal + iva;

            Transaction transaction = new Transaction(webpayOptions);

            var resp = transaction.create(buyOrder, sessionId, bruto, returnUrl);

            Orden orden = new Orden();
            orden.setBuyOrder(buyOrder);
            orden.setToken(resp.getToken());
            orden.setTotal(bruto);
            orden.setEstado("PENDIENTE");
            request.getItems().forEach(i -> orden.getItems().add(new ItemOrden(i.getProductId(), i.getCantidad())));
            ordenRepository.save(orden);

            return ResponseEntity.ok(resp);

        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_CONTENT).body(e.getMessage());
        } catch (TransactionCreateException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_CONTENT).body(e.getMessage());
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


    @CrossOrigin(origins = LOCAL_ADDRESS)
    @PostMapping("/api/webpay/commit")
    public ResponseEntity<Object> commitTransaction(
            @RequestParam(TOKEN_KEY) String token
    ) {
        try {
            Transaction transaction = new Transaction(webpayOptions);
            var resp = transaction.commit(token);

            if ("AUTHORIZED".equals(resp.getStatus()) && resp.getResponseCode() == 0) {
                ordenService.marcarPagado(token);
            }else {
                ordenService.rechazada(token);
            }
            return ResponseEntity.ok(resp);
        }catch (TransactionCommitException e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_CONTENT).body(e.getMessage());
        }catch (IOException e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @CrossOrigin(origins = LOCAL_ADDRESS)
    @PostMapping("/api/webpay/search")
    public ResponseEntity<Object> searchTransaction(
            @RequestParam(TOKEN_KEY) String token
    ){
        try {
            Transaction transaction = new Transaction(webpayOptions);
            return ResponseEntity.ok(transaction.status(token));
        } catch (TransactionStatusException e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_CONTENT).body(e.getMessage());
        } catch (IOException e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @CrossOrigin(origins = LOCAL_ADDRESS)
    @PostMapping("/api/webpay/capture")
    public ResponseEntity<Object> captureTransaction(
            @RequestParam(TOKEN_KEY) String token,
            @RequestBody CaptureRequest request
    ) {
      try {
          Transaction transaction = new Transaction(webpayOptions);
          String buyOrder = request.getBuyOrder();
          String authorizationCode = request.getAuthorizationCode();
          Double amount = request.getAmount();

          return ResponseEntity.ok(transaction.capture(
                  token,
                  buyOrder,
                  authorizationCode,
                  amount
          ));
      }  catch (TransactionCaptureException e){
          e.printStackTrace();
          return ResponseEntity.status(HttpStatus.UNPROCESSABLE_CONTENT).body(e.getMessage());
      } catch (IOException e){
          e.printStackTrace();
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
      }
    }

}
