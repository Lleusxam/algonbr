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
            src="https://criticalhits.com.br/wp-content/uploads/2018/10/goku-ssj3-1060124-1280x0.jpg" 
            className="img-fluid w-100" 
            alt="Banner" 
          />
        </div>
      </div>

      {/* Highlighted Text Section */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-4">Bem-vindo ao Algon!</h1>
            <p className="lead">
                Aqui será colocado o texto de apresentação do site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
