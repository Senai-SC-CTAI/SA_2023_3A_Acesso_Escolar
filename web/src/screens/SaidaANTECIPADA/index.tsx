import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [RegistroSaida, setRegistroSaida] = useState([]);
  const [novoRegistroSaida, setNovoRegistroSaida] = useState({
    data_hora: '',
    cpf: '',
  });

  useEffect(() => {
    fetchRegistroSaida();
  }, []);

  const fetchRegistroSaida = async () => {
    try {
      const response = await axios.get('http://localhost:8090/registrosaida');
      setRegistroSaida(response.data);
    } catch (error) {
      console.error('Erro ao buscar registrosaida:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/registrosaida', novoRegistroSaida);
      fetchRegistroSaida();
      setNovoRegistroSaida({
        data_hora: '',
        cpf: '',
      });
    } catch (error) {
      console.error('Erro ao criar registrosaida:', error);
    }
  };

  const handleDelete = async (cpf) => {
    try {
      await axios.delete(`http://localhost:8090/registrosaida/${cpf}`);
      fetchRegistroSaida();
    } catch (error) {
      console.error('Erro ao excluir registrosaida:', error);
      if (error.response) {
        console.error('Status de erro:', error.response.status);
        console.error('Dados do erro:', error.response.data);
      } else if (error.request) {
        console.error('Sem resposta do servidor');
      } else {
        console.error('Erro na configuração da solicitação:', error.message);
      }
    }
  };

  return (
    <div>
      <h1>Gerenciamento de Saida</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="data_hora"
          placeholder="Data e Hora"
          value={novoRegistroSaida.data_hora}
          onChange={(event) =>
            setNovoRegistroSaida({ ...novoRegistroSaida, data_hora: event.target.value })
          }
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={novoRegistroSaida.cpf}
          onChange={(event) =>
            setNovoRegistroSaida({ ...novoRegistroSaida, cpf: event.target.value })
          }
        />
        <button type="submit">Adicionar Saida</button>
      </form>

      <ul>
        {RegistroSaida.map((RegistroSaida) => (
          <li key={RegistroSaida.cpf}>
            {RegistroSaida.data_hora} - {RegistroSaida.cpf} 
            <button onClick={() => handleDelete(RegistroSaida.cpf)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
