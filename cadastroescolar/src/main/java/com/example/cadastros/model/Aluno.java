package com.example.cadastros.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rg;

    private String numCelular;
    private String email;
    private String dataNasc;
    private String nome;
    private Long id_matricula;
    private String cpf;
}
