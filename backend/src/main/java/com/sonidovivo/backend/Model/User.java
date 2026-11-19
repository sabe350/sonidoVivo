package com.sonidovivo.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@Entity
@Table(name = "USUARIO")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String password;

    private String nombre;
    private String apellido;
    private String correo;
    private Integer telefono;
    private String direccion;

    @Enumerated(EnumType.STRING)
    private Role role;

}
