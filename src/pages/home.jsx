import CardNews from '../components/CardNews/CardNews';
import PropTypes from 'prop-types';
import { getNews } from '../services/NewServices';
import { useState, useEffect } from 'react';


const Home = () => {
	const [news, setNews] = useState([])

	useEffect(() => {
		console.log("test");
		async function getData(){
			let data = await getNews()
			console.log(data);
			setNews(data)
		}

		getData()
	}, []) 

	return <main>
	
	<ul>
		{news?.map(({id: newsId, profilePictureURL: avatar, nickName: name, title, pictureURL: photo, publishedAt: date, description, text}) => (
		<li className="liNews"
			key={newsId}>
				<CardNews
			avatar={avatar}
			name={name}
			title={title}
			photo={photo}
			date={date}
			description={description}
			text={text}
		/></li>
	))}
	</ul>
	
	
		
	
</main>
}

Home.propTypes = {
	data: PropTypes.string
}
export default Home;