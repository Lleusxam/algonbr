import React from 'react';
const Contact = () => {
  return (
    <div>

      {/* Main Content */}
      <div className="container my-5">
        <h1 className="text-center titulo">Contato</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Entre em contato conosco!</h5>
                <p className="card-text">
                  Se você tiver alguma dúvida ou precisar de mais informações, não hesite em entrar em contato conosco.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <strong>Telefone:</strong> (83) 3569-8341
                  </li>
                  <li>
                    <strong>E-mail:</strong> <a href="mailto:contato@algonbr.com.br">contato@algonbr.com.br</a>
                  </li>
                  <li>
                    <strong>Endereço:</strong> Av. Sustentabilidade, 23 - João Pessoa, PB
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;