package com.example.cadastros.controller;

import com.example.cadastros.model.Cadastra;
import com.example.cadastros.repository.CadastraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController
@RequestMapping("/cadastra")
public class CadastraController {
    @Autowired
    private CadastraRepository cadastraRepository;

    // Adicione os endpoints conforme necessário para Cadastra.
}
