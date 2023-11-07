import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export function Page() {
  return (
    <>
      <HeaderPage />
      <div className="pageContainer">
        <div className="headerContent">
          <h1 className='pageTitle'>Acompanhe seu <span id='blue'>aluno</span> por completo, totalmente gratuito</h1>
          <NavLink to="/login">
            <p className='btnSignIn'>
              Entrar
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

function HeaderPage() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setActiveItem(item);
  };

  return null; // Removed the loginSec from HeaderPage
}

