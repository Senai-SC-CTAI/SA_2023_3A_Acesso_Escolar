import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export function RegistraAluno() {
  const navigation = useNavigation();
  const [alunos, setAlunos] = useState([]);
  const [novoAluno, setNovoAluno] = useState({
    rg: '',
    cpf: '',
    numCelular: '',
    email: '',
    dataNasc: '',
    nome: '',
    idmatricula: '',
  });


  useEffect(() => {
    fetchAlunos();
  }, []);


  const fetchAlunos = async () => {
    try {
      const response = await axios.get('http://localhost:8090/aluno');
      setAlunos(response.data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/aluno', novoAluno);
      fetchAlunos();
      setNovoAluno({
        rg: '',
        cpf: '',
        numCelular: '',
        email: '',
        dataNasc: '',
        nome: '',
        idmatricula: '',
      });
    } catch (error) {
      console.error('Erro ao criar aluno:', error);
    }
  };


  const handleDelete = async (rg) => {
    try {
      await axios.delete(`http://localhost:8090/aluno/${rg}`);
      fetchAlunos();
    } catch (error) {
      console.error('Erro ao excluir aluno:', error);
    }
  };


  return (
    <div>
      {/* Cabeçalho */}
      <h1>Gerenciamento de Alunos</h1>


      {/* Formulário de adição de aluno */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="rg"
          placeholder="RG"
          value={novoAluno.rg}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, rg: event.target.value })
          }
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={novoAluno.cpf}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, cpf: event.target.value })
          }
        />
        <input
          type="text"
          name="numCelular"
          placeholder="Número de Celular"
          value={novoAluno.numCelular}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, numCelular: event.target.value })
          }
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={novoAluno.email}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, email: event.target.value })
          }
        />
        <input
          type="text"
          name="dataNasc"
          placeholder="Data de Nascimento"
          value={novoAluno.dataNasc}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, dataNasc: event.target.value })
          }
        />
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoAluno.nome}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, nome: event.target.value })
          }
        />
        <input
          type="text"
          name="idmatricula"
          placeholder="ID de Matrícula"
          value={novoAluno.idmatricula}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, idmatricula: event.target.value })
          }
        />
        <button type="submit">Adicionar Aluno</button>
      </form>


      {/* Lista de alunos */}
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.rg}>
            {aluno.rg} - {aluno.nome} ({aluno.dataNasc})


            <button onClick={() => handleDelete(aluno.rg)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

