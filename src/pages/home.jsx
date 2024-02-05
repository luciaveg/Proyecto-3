import CardNews from '../components/CardNews/CardNews';
import PropTypes from 'prop-types';


const Home = ({ data }) => {
	return <>
	<h1>This is the News...</h1>
	{data?.mapa((newsId, avatar, name, title, photo, date, description, text) => (
		<CardNews
			key={newsId}
			avatar={avatar}
			userName={name}
			tilte={title}
			image={photo}
			date={date}
			description={description}
			text={text}
		/>
	))}
	
		
	
</>
}

Home.propTypes = {
	data: PropTypes.string
}
export default Home;