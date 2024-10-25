import React from 'react';
import { Link } from 'react-router-dom'; 

const AppBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Meu Site</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Serviços</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
