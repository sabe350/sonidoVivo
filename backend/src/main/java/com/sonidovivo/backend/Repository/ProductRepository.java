package com.sonidovivo.backend.Repository;

import com.sonidovivo.backend.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, String>{
}
