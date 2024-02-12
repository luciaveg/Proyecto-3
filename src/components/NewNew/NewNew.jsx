import {useState } from 'react';

const NewNew = () => {
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate =  () => {
    const request = {
      title: title,
      theme: theme,
      description: description
    };
    
    console.log(request);
    //llamar endpoint con informacion de request
  }


  return (
    <div>
      {(
        <form>
          <label htmlFor="title">Título:</label>
          <input value={title} onInput={e => setTitle(e.target.value)}
            type="text"
            id="title"
          />
          <label htmlFor="theme">tema:</label>
          <input value={theme} onInput={e => setTheme(e.target.value)}
            type="text"
            id="theme"
          />
          <label htmlFor="description">Contenido:</label>
          <textarea value={description} onInput={e => setDescription(e.target.value)}
            id="description"
          ></textarea>

          <button type="button" onClick={handleCreate}>
            Crear Noticia
          </button>
        </form>
      )}
    </div>
  );
};

export default NewNew;
