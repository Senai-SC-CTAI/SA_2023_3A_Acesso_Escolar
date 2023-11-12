import './style.css'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setActiveItem(item);
  };

  return (
    <>
      <header className="header">
        <div className="headerContent1">
          <NavLink to="/home">
            <div className="logo" onClick={() => handleItemClick('Home')}>
            </div>
          </NavLink>
          <nav className="nav">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/CadastraALU">Cadastrar Aluno</NavLink>
              </li>
              <li>
                <NavLink to="/EntradaTARDIA">Registrar Entrada Tardia</NavLink>
              </li>
              <li>
                <NavLink to="/gerenciamento">Registrar Saida Antecipada</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="user">
        </div>
      </header>
    </>
  )
}

export default Header