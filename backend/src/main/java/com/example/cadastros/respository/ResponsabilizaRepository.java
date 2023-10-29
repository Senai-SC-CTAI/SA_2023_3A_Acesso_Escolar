package com.example.cadastros.repository;

import com.example.cadastros.model.Responsabiliza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponsabilizaRepository extends JpaRepository<Responsabiliza, Long> {
}
