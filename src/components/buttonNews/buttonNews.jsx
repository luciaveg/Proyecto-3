import React from 'react';

const Noticia = ({ noticia, usuarioActual, onDelete }) => {
  const { id, titulo, contenido, propietario } = noticia;

  const esPropietario = usuarioActual === propietario;

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{contenido}</p>
      
      {/* Botón de eliminación */}
      {esPropietario && (
        <button className="delete-button" onClick={() => onDelete(id)}>
          Eliminar Noticia
        </button>
      )}
    </div>
  );
};

export default Noticia;
