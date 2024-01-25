import PropTypes from 'prop-types';

const CardNews = ({avatar, name, title, description, text, date})=>{
    const handleClick = () => {

    };

    return (
        <div className="container" onClick={handleClick}>
            <div className="usuario">`${avatar}${name}`</div>
            <div>
                <img src={image} alt="" className="image"/>
            </div>
            <div>
                <h2 className="titulo">Titulo</h2>
                <h4 className="description">Descripcion</h4>
                <h6 className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid nobis! Sint, eaque. Itaque dolores natus, dolorem dolore at sunt praesentium, maxime quae sequi doloribus voluptatum? Aliquam, eum saepe!</h6>
                <h7 className="date"></h7>
            </div>
        </div>
    )
};
CardNews.proptypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
};
export default CardNews;