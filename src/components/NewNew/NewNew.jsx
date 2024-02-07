import  { useState } from 'react';

const NewNew = ({ theNew, onCreate }) => {
  const [title, setTitulo] = useState(theNew);
  const [content, setContenido] = useState(theNew);


  const handleCreate = () => {
    onCreate({ ...theNew, title, content });
  };

  return (
    <div>
      {(
        <form>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label htmlFor="content">Contenido:</label>
          <textarea
            id="content"
            onChange={(e) => setContenido(e.target.value)}
          ></textarea>

          <button type="button" onClick={handleCreate}>
            Actualizar Noticia
          </button>
        </form>
      )}
    </div>
  );
};

export default NewNew;
