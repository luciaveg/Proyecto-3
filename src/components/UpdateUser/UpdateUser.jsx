import { useState } from "react";

const UpdateUser = ({user}) => {
  const [name, setName] = useState(user.name);
  const [theme, setTheme] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    const request = {
      name: name,
      theme: theme,
      description: description,
    };

    console.log(request);
    //llamar endpoint con informacion de request
  };

  return (
    <div>
      {
        <form>
          <label htmlFor="name">Nombre:</label>
          <input
            value={name}
            onInput={(e) => setName(e.target.value)}
            type="text"
            id="name"
          />
          <label htmlFor="theme">tema:</label>
          <input
            value={theme}
            onInput={(e) => setTheme(e.target.value)}
            type="text"
            id="theme"
          />
          <label htmlFor="description">Contenido:</label>
          <textarea
            value={description}
            onInput={(e) => setDescription(e.target.value)}
            id="description"
          ></textarea>

          <button type="button" onClick={handleCreate}>
            Actualizar usuario
          </button>
        </form>
      }
    </div>
  );
};

export default UpdateUser;
