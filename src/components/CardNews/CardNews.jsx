import PropTypes from 'prop-types';
import './CardNews.css';

const CardNews = ({avatar, name, title, photo, description, text, date})=>{
    const handleClick = () => {

    };

    return (
        <div className="container" onClick={handleClick}>
            <div className="usuario">{`${avatar}${name}`}
            </div>
            <h2 className="titulo">Titulo de la Noticia</h2>
            <div className="image">
                <img src={photo} alt="Photo de la Noticia" />
            </div>
            <div>
                
                <h4 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid nobis! Sint, eaque. Itaque dolores natus, dolorem dolore at sunt praesentium, maxime quae sequi doloribus voluptatum? Aliquam, eum saepe!</h4>
                <h6 className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid nobis! Sint, eaque. Itaque dolores natus, dolorem dolore at sunt praesentium, maxime quae sequi doloribus voluptatum? Aliquam, eum saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid nobis! Sint, eaque. Itaque dolores natus, dolorem dolore at sunt praesentium, maxime quae sequi doloribus voluptatum? Aliquam, eum saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid nobis! Sint, eaque. Itaque dolores natus, dolorem dolore at sunt praesentium, maxime quae sequi doloribus voluptatum? Aliquam, eum saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid nobis! Sint, eaque. Itaque dolores natus, dolorem dolore at sunt praesentium, maxime quae sequi doloribus voluptatum? Aliquam, eum saepe!</h6>
                <h7 className="date"></h7>
            </div>
        </div>
    )
};
CardNews.proptypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string,
};
export default CardNews;