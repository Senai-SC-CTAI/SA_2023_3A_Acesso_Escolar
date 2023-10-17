package com.example.cadastros.controller;

import com.example.cadastros.model.RegistroSaida;
import com.example.cadastros.repository.RegistroSaidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController
@RequestMapping("/registro-saida")
public class RegistroSaidaController {
    @Autowired
    private RegistroSaidaRepository registroSaidaRepository;

    @GetMapping
    public List<RegistroSaida> listarRegistrosSaida() {
        return registroSaidaRepository.findAll();
    }

    @PostMapping
    public RegistroSaida criarRegistroSaida(@RequestBody RegistroSaida registroSaida) {
        return registroSaidaRepository.save(registroSaida);
    }

    // Adicione outros endpoints conforme necessário para RegistroSaida.
}

