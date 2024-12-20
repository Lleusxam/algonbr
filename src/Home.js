import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className="container-fluid p-0">
        <div className="hero">
          {/* Large Image */}
          <img 
            src="logo_esticada.png"
            className="img-fluid w-100" 
            alt="Banner" 
          />
        </div>
      </div>

      {/* Highlighted Text Section */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-4" style={{color: '#2a5c47', fontWeight: 'bold', fontFamily: 'League Spartan'}}>Bem-vindo a algon!</h1>
            <p className="lead" style={{color: ''}}>
            Na algon, transformamos o desafio das emissões de CO2 em oportunidades. Usamos tecnologias de ponta para capturar dióxido de carbono com pureza de 99,9%, ajudando indústrias a reduzir sua pegada de carbono e gerar valor econômico. Além disso, nossos projetos sociais promovem o uso de CO2 capturado em comunidades carentes, impulsionando o desenvolvimento sustentável e social.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
