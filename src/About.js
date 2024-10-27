import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            {/* Title */}
            <h1 className="display-4 mb-4 titulo">Sobre Nós</h1>

            {/* Image */}
            <img 
              src="logo_circular.png" 
              alt="Sobre nós" 
              className="img-fluid w-50" 
            />

            {/* Description */}
            <p className="lead mt-4">
              A algon é uma empresa focada em soluções tecnológicas para captura e reutilização de dióxido de carbono (CO2) com impacto ambiental e social. Nossa tecnologia inovadora garante CO2 de alta pureza, essencial para indústrias que necessitam de soluções eficientes para reduzir emissões. Além disso, investimos em iniciativas que utilizam esse CO2 em projetos comunitários, promovendo energia renovável e sustentabilidade local.
            </p>

            {/* Mission, Vision, and Values Sections */}
            <div className="mt-5">
              <h1 className="mb-3 titulo">Missão</h1>
              <p className="mb-4">
                Reduzir a pegada de carbono das indústrias, fornecendo soluções tecnológicas avançadas, ao mesmo tempo em que geramos impacto positivo em comunidades através de projetos sociais.
              </p>

              <h1 className="mb-3 titulo">Visão</h1>
              <p className="mb-4">
                Ser referência em captura de carbono, conectando inovação e impacto social, tornando a economia de baixo carbono uma realidade acessível para todos.
              </p>

              <h1 className="mb-3 titulo">Valores</h1>
              <div className="card text-start mb-4">
                <div className="card-body">
                  <p><b>Sustentabilidade:</b> Compromisso com a redução de emissões de carbono e promoção de uma economia circular.</p>
                  <p><b>Inovação:</b> Uso de tecnologias avançadas para captura de CO₂ com alta pureza.</p>
                  <p><b>Impacto Social:</b> Investimento em projetos comunitários, como o cultivo de algas, gerando benefícios sociais e ambientais.</p>
                  <p><b>Transparência:</b> Operação clara e aberta, com foco em resultados e impacto positivo.</p>
                  <p><b>Responsabilidade Social:</b> Alinhamos lucro e propósito, criando valor para indústrias e comunidades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
