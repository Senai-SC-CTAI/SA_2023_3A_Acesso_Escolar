package com.example.cadastros.controller;

import com.example.cadastros.model.Porteiro;
import com.example.cadastros.repository.PorteiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController
@RequestMapping("/porteiro")
public class PorteiroController {
    @Autowired
    private PorteiroRepository porteiroRepository;

    // Adicione os endpoints conforme necessário para Porteiro.
}

