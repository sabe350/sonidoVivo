package com.sonidovivo.backend.Repository;

import com.sonidovivo.backend.Model.Orden;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrdenRepository extends JpaRepository<Orden, Long> {
    Optional<Orden> findByToken(String token);
}
