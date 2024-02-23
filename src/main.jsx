//import React from 'react';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


// import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	//<React.StrictMode>
	// <BrowserRouter>
		<App />
	// </BrowserRouter>
	//</React.StrictMode>
)
