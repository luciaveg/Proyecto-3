const { VITE_BACKENDURL } = import.meta.env;

const getNews = async () => {
  const res = await fetch(
    VITE_BACKENDURL + "/news"
    /*  {
    method: "POST",
    headers: {
        Authorization: token,
        "Content-type": "application/json", //casi siempre
        "Content-type": "multipart/form-data" //peticiones que pueden llevar imgenes
    },
    body: {body}
  } */
  );
  const data = await res.json();
  return data;
};
export { getNews };