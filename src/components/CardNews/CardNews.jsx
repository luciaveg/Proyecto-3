import PropTypes from 'prop-types';
import './CardNews.css';
const {VITE_BACKENDURL} =import.meta.env

const CardNews = ({avatar, name, title, photo, date, description, text})=>{
    const handleClick = () => {

    };

    return (
        <div className="container" onClick={handleClick}>
            <div className="usuario"><img src={VITE_BACKENDURL+avatar} alt={`Avatar de ${name}`}/> {name}
            </div>
            <h2 className="titulo">{`${title}`}</h2>
            <div className="container-image">
                <img src={VITE_BACKENDURL+photo} alt="Photo de la Noticia" className="image" />
            </div>
            <p className="date">{`${date}`}</p>
            <h4 className="description">{`${description}`}</h4>
            <div>
            <p className="text">{`${text}`}</p>
            </div>    

        </div>
    )
};
CardNews.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string,
    description: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string,
};
export default CardNews;