package com.example.cadastros.repository;

import com.example.cadastros.model.Porteiro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PorteiroRepository extends JpaRepository<Porteiro, Long> {
}
