import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [registroentrada, setRegistroEntrada] = useState([]);
  const [novoRegistroEntrada, setNovoRegistroEntrada] = useState({
    data_hora: '',
    cpf: '',
  });


  useEffect(() => {
    fetchRegistroEntrada();
  }, []);


  const fetchRegistroEntrada = async () => {
    try {
      const response = await axios.get('http://localhost:8090/registroentrada');
      setRegistroEntrada(response.data);
    } catch (error) {
      console.error('Erro ao buscar registroentrada:', error);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/registroentrada', novoRegistroEntrada);
      fetchRegistroEntrada();
      setNovoRegistroEntrada({
        data_hora: '',
        cpf: '',
      });
    } catch (error) {
      console.error('Erro ao criar registroentrada:', error);
    }
  };


  const handleDelete = async (cpf) => {
    try {
      await axios.delete(`http://localhost:8090/registroentrada/${rg}`);
      fetchRegistroEntrada();
    } catch (error) {
      console.error('Erro ao excluir registroentrada:', error);
    }
  };


  return (
    <div>
      {/* Cabeçalho */}
      <h1>Gerenciamento de Entarada Tardia</h1>


      {/* Formulário de adição de aluno */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="data_hora"
          placeholder="Data e Hora"
          value={novoRegistroEntrada.data_hora}
          onChange={(event) =>
            setNovoRegistroEntrada({ ...novoRegistroEntrada, data_hora: event.target.value })
          }
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={novoRegistroEntrada.cpf}
          onChange={(event) =>
            setNovoRegistroEntrada({ ...novoRegistroEntrada, cpf: event.target.value })
          }
        />
        <button type="submit">Adicionar Entrada</button>
      </form>


      {/* Lista de alunos */}
      <ul>
        {registroentrada.map((registroentrada) => (
          <li key={novoRegistroEntrada.cpf}>
            {novoRegistroEntrada.cpf} - {novoRegistroEntrada.data_hora} 


            <button onClick={() => handleDelete(novoRegistroEntrada.cpf)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;