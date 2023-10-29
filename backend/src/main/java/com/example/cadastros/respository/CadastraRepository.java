package com.example.cadastros.repository;

import com.example.cadastros.model.Cadastra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CadastraRepository extends JpaRepository<Cadastra, Long> {
}
