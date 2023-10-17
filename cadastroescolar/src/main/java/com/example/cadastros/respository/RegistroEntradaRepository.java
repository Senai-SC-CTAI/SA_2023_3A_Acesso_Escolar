package com.example.cadastros.repository;

import com.example.cadastros.model.RegistroEntrada;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistroEntradaRepository extends JpaRepository<RegistroEntrada, Long> {
}
