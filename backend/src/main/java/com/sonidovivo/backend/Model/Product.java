package com.sonidovivo.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @Column(unique = true)
    private String id;

    private int stock;

    private String nombre;

    private int precio;
}
