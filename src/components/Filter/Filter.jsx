import { useState, useEffect } from 'react';

function App() {
    const [news, setNews] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('deportes,politica,sucesos,musica,cocina,general');

    useEffect(() => {
    fetchNews(selectedTopic);
    }, [selectedTopic]);

        const fetchNews = async (topic) => {
    try {
    const response = await fetch(`$localhost:3000/news?topic=${topic}`);
    const data = await response.json();
        setNews(data.articles);
    } catch (error) {
    console.error('Error fetching news:', error);
    }
};

    function handleTopicChange(event) {
        setSelectedTopic(event.target.value);
    }

return (
    <div>
    <h1>App</h1>
    <select value={selectedTopic} onChange={handleTopicChange}>
        <option value="deportes">Deportes</option>
        <option value="politica">Politica</option>
        <option value="sucesos">Sucesos</option>
        <option value="musica">Musica</option>
        <option value="cocina">Cocina</option>
        <option value="general">General</option>
        
    
    </select>
        <ul>
        {news.map((article, index) => (
        <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
        </li>
        ))}
    </ul>
    </div>
); }


export default App;
