import { useState } from 'react';

const useGetToken = (method, body) => {
	const [token, setToken] = useState(null);
	if (method !== 'POST') {
		return {
			err: true,
			text: 'Invalid method',
		};
	}

	if (!body) {
		return {
			err: true,
			text: 'User data is missing',
		};
	}

	if (!body.username) {
		return {
			err: true,
			text: 'Username is missing',
		};
	}

	if (!body.password) {
		return {
			err: true,
			text: 'Password is invalid',
		};
	}

	const jwtToken = Math.floor(Math.random() * 10000000);
	setToken(jwtToken);
	return { success: true, token };
};

export default useGetToken;

