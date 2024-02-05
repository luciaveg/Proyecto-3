import PropTypes from 'prop-types';
import './CardNews.css';

const CardNews = ({avatar, name, title, photo, date, description, text})=>{
    const handleClick = () => {

    };

    return (
        <div className="container" onClick={handleClick}>
            <div className="usuario">{`${avatar}${name}`}
            </div>
            <h2 className="titulo">{`${title}`}</h2>
            <div className="container-image">
                <img src={photo} alt="Photo de la Noticia" className="image" />
            </div>
            <h6 className="date">{`${date}`}</h6>
            <h4 className="description">{`${description}`}</h4>
            <div>
            <h5 className="text">{`${text}`}</h5>
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