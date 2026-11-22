package com.sonidovivo.backend.Service;

import com.sonidovivo.backend.Model.ItemOrden;
import com.sonidovivo.backend.Model.Orden;
import com.sonidovivo.backend.Model.Product;
import com.sonidovivo.backend.Repository.OrdenRepository;
import com.sonidovivo.backend.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrdenService {

    @Autowired private OrdenRepository ordenRepository;
    @Autowired private ProductRepository productRepository;

    @Transactional
    public void marcarPagado(String token){
        Orden orden = ordenRepository.findByToken(token)
                .orElseThrow(() -> new IllegalArgumentException("Orden no encotrada"));
        if ("PAGADA".equals(orden.getEstado()) || "REVISAR".equals(orden.getEstado())) return;

        boolean faltaStock = false;
        for (ItemOrden it: orden.getItems()){
            Product p = productRepository.findById(it.getProductId())
                    .orElseThrow(() -> new IllegalArgumentException("Producto no encontrado " + it.getProductId()));
            if (p.getStock() < it.getCantidad()) faltaStock = true;
            p.setStock(Math.max(0, p.getStock() - it.getCantidad()));
        }

        orden.setEstado(faltaStock ? "REVISAR" : "PAGADA");
    }

    @Transactional
    public void rechazada(String token){
        ordenRepository.findByToken(token).ifPresent(o -> {
            if("PENDIENTE".equals(o.getEstado())) o.setEstado("RECHAZADA");
        });
    }
}
