import './NewsDetails.css';
const NewsDetail = ({title, avatar,text}) => {


    return (
    <div className="news-detail">
        <h2>Titulo: {title}</h2>
        <div className="creator-info">
        {<img className="avatar" src={avatar} />}
        </div>
        <p>{text}</p>
    </div>
);
};

export default NewsDetail;
