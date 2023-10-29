package com.example.cadastros.controller;

import com.example.cadastros.model.RegistroEntrada;
import com.example.cadastros.repository.RegistroEntradaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController
@RequestMapping("/registro-entrada")
public class RegistroEntradaController {
    @Autowired
    private RegistroEntradaRepository registroEntradaRepository;

    @GetMapping
    public List<RegistroEntrada> listarRegistrosEntrada() {
        return registroEntradaRepository.findAll();
    }

    @PostMapping
    public RegistroEntrada criarRegistroEntrada(@RequestBody RegistroEntrada registroEntrada) {
        return registroEntradaRepository.save(registroEntrada);
    }

    // Adicione outros endpoints conforme necessário para RegistroEntrada.
}
