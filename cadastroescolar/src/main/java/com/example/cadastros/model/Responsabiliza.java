package com.example.cadastros.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Responsabiliza {
    @Id
    @ManyToOne
    private Responsavel responsavel;

    @Id
    @ManyToOne
    private Aluno aluno;
}
