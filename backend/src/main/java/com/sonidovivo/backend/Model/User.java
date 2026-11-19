package com.sonidovivo.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String password;

    private String nombre;
    private String apellido;
    private String correo;
    private Integer telefono;

    @Enumerated(EnumType.STRING)
    private Role role;

}
