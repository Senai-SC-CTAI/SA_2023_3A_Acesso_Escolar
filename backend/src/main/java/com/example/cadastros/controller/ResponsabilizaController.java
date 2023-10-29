package com.example.cadastros.controller;

import com.example.cadastros.model.Responsabiliza;
import com.example.cadastros.repository.ResponsabilizaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController
@RequestMapping("/responsabiliza")
public class ResponsabilizaController {
    @Autowired
    private ResponsabilizaRepository responsabilizaRepository;

    @GetMapping
    public List<Responsabiliza> listarResponsabiliza() {
        return responsabilizaRepository.findAll();
    }

    @PostMapping
    public Responsabiliza criarResponsabiliza(@RequestBody Responzabiliza responsabiliza) {
        return responsabilizaRepository.save(responsabiliza);
    }

    // Adicione outros endpoints conforme necessário para Responsabiliza.
}
