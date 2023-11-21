import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

export default function Login() {
  return (
    <div className="container-Login">
      <div className="div-content">
        <h2 className="title">Entrar como Aluno</h2>

        <div className="input-container-Login">
          <h3 className="input-label-Login">E-mail</h3>
          <input className='input-Login' type="email" placeholder="Seu e-mail" />
        </div>
        <div className="input-container-Login">
          <h3 className="input-label-Login">Senha</h3>
          <input className='input-Login' type="password" placeholder="Sua senha" />
          <div className='esqueceuSenha-Login'>
            <Link to="/home" className='input_label-Login'>Esqueceu a senha? Clique aqui</Link>
          </div>
        </div>

        <Link to="/homeALU" className="submit-button">Entrar</Link>
        <p className="ou">ou</p>
        <Link to="/homeRES" className="submit-button">Entrar como Responsavel</Link>
        <Link to="/homeADM" className="submit-button">Entrar como Administrador</Link>
      </div>
    </div>
  );
};
