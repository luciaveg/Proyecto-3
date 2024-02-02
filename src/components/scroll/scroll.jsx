import { useState, useEffect } from 'react';

const Scroll = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		console.log('Actualizacion');

		const trackScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', trackScroll);

		return () => {
			window.removeEventListener('scroll', trackScroll); //* Desmontaje
		};
	}, [scrollY]);

	useEffect(() => {
		console.log('Montaje');
	}, []);

	return (
		<span style={{ fontWeight: 'bold', fontSize: '100px' }}>
			Scroll {scrollY}
		</span>
	);
};

export default Scroll;
