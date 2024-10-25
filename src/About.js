import React from 'react';

const About = () => {
  return (
    <div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            {/* Image */}
            <h1>Logozinha</h1>
            {/* <img 
              src=""
              alt="Sobre nós" 
              className="img-fluid rounded-circle mb-4"
            /> */}
            {/* Title */}
            <h1 className="display-4">Sobre Nós</h1>
            {/* Description */}
            <p className="lead mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <p>
             <h1>Missão</h1>
             <p>Pinga</p>
             <h1>Visão</h1>
             <p>Pinga</p>
             <h1>Valores</h1>
             <p>Pinga</p>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
