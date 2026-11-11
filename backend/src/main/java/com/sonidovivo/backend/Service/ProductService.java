package com.sonidovivo.backend.Service;

import com.sonidovivo.backend.Model.Product;
import com.sonidovivo.backend.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    public ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Product getProductById(String id){
        return productRepository.findById(id).orElse(null);
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(String id){
        productRepository.deleteById(id);
    }
}
