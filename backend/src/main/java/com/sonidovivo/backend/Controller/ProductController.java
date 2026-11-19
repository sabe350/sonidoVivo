package com.sonidovivo.backend.Controller;

import com.sonidovivo.backend.Model.Product;
import com.sonidovivo.backend.Service.ProductService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@SecurityRequirement(name="Ingrese token generado en Inicio de sesion")
@Tag(name = "Sistema de gestion de inventario")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable String id){
        return productService.getProductById(id);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        return productService.saveProduct(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable String id, @RequestBody Product product){
        Product existingProduct = productService.getProductById(id);
        if (existingProduct != null){
            existingProduct.setNombre(product.getNombre());
            existingProduct.setMarca(product.getMarca());
            existingProduct.setModelo(product.getModelo());
            existingProduct.setPrecio(product.getPrecio());
            existingProduct.setStock(product.getStock());
            return productService.saveProduct(existingProduct);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id){
        productService.deleteProduct(id);
    }
}
