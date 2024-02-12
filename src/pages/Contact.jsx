import React from 'react';

const Contact = () => {
  return (
    <div className="contacto-container">
      <h1 className="contacto-titulo">Contáctanos</h1>
      <p className="contacto-descripcion">
        ¡Nos encantaría saber de ti! No dudes en contactarnos utilizando la
        información de contacto que se proporciona a continuación.
      </p>
      <div className="contacto-info">
        <p>Email: ejemplo@ejemplo.com</p>
        <p>Teléfono: +1234567890</p>
        <p>Dirección: 123 Calle Principal, Ciudad, País</p>
      </div>
    </div>
  );
};

export default Contact;
