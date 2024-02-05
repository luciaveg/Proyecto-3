import React, { useState } from 'react';

const NoticiaFormulario = ({ noticia, usuarioActual, onUpdate }) => {
  const [titulo, setTitulo] = useState(noticia.titulo);
  const [contenido, setContenido] = useState(noticia.contenido);

  const esPropietario = usuarioActual === noticia.propietario;

  const handleActualizar = () => {
    onUpdate({ ...noticia, titulo, contenido });
  };

  return (
    <div>
      {esPropietario && (
        <form>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label htmlFor="contenido">Contenido:</label>
          <textarea
            id="contenido"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          ></textarea>

          <button type="button" onClick={handleActualizar}>
            Actualizar Noticia
          </button>
        </form>
      )}
    </div>
  );
};

export default NoticiaFormulario;
