package com.example.cadastros.repository;

import com.example.cadastros.model.RegistroSaida;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistroSaidaRepository extends JpaRepository<RegistroSaida, Long> {
}
