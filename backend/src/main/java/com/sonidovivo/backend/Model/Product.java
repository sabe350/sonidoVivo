package com.sonidovivo.backend.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import org.springframework.context.annotation.Primary;

@Entity
@Table(name = "PRODUCT")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @Column(unique = true, length = 5, nullable = false)
    private String id;

    private int stock;

    private String nombre;

    private String marca;

    private String modelo;

    private int precio;
}
