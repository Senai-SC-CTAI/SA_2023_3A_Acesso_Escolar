import './style.css'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header2() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setActiveItem(item);
  };

  return (
    <>
      <header className="header1">
        <div className="headerContent1">
          <NavLink to="/home">
            <div className="logo" onClick={() => handleItemClick('Home')}>
            </div>
          </NavLink>
          <nav className="nav">
            <ul>
              <li>
                <NavLink to="/home">Conta</NavLink>
              </li>
              <li>
                <NavLink to="/CadastraALU">Verificar presenca</NavLink>
              </li>
              <li>
                <NavLink to="/EntradaTARDIA">Tirar relatorio</NavLink>
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

export default Header2