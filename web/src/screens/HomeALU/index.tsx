import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function HomeALU() {
  return (
    <div className="container-Login">
      <div className="div-content">
        <h2 className="title">Entrar</h2>

        <div className="input-container-Login">
          <h3 className="input-label-Login">E-mail</h3>
          <input className='input-Login' type="email" placeholder="seuemail@estudante.sesisenai.org.br" />
        </div>
        <div className="input-container-Login">
          <h3 className="input-label-Login">Senha</h3>
          <input className='input-Login' type="password" placeholder="senha" />
          <div className='esqueceuSenha-Login'>
            <Link to="/home" className='input_label-Login'>Esqueceu a senha? Clique aqui</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
