package com.example.cadastros.controller;

import com.example.cadastros.model.Responsavel;
import com.example.cadastros.repository.ResponsavelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController
@RequestMapping("/responsaveis")
public class ResponsavelController {
    @Autowired
    private ResponsavelRepository responsavelRepository;

    @GetMapping
    public List<Responsavel> listarResponsaveis() {
        return responsavelRepository.findAll();
    }

    @PostMapping
    public Responsavel criarResponsavel(@RequestBody Responsavel responsavel) {
        return responsavelRepository.save(responsavel);
    }

    // Adicione outros endpoints conforme necessário para o Responsavel.
}

