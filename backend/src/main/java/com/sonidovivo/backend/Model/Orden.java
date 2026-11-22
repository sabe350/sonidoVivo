package com.sonidovivo.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "ORDEN")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Orden {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String buyOrder;

    @Column(unique = true)
    private String token;

    private long total;

    private String estado;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "ORDEN_ITEM", joinColumns = @JoinColumn(name = "orden_id"))
    private List<ItemOrden> items = new ArrayList<>();
}
