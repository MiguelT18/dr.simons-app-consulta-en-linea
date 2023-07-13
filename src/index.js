import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	createBrowserRouter,
	RouterProvider,
	Routes,
	Route,
} from 'react-router-dom';

// Consulta en Línea
import { ConsiderationsPage } from './pages/Consulta/components/Consideraciones/ConsiderationsPage';
import Paso1 from './pages/Consulta/routes/Paso1';
import Paso2 from './pages/Consulta/routes/Paso2';
import Paso3 from './pages/Consulta/routes/Paso3';
import Paso4 from './pages/Consulta/routes/Paso4';
import Paso5 from './pages/Consulta/routes/Paso5';

// Newsletter
import { Newsletter } from './pages/Newsletter/Newsletter';
import LandingPage from './pages/Consulta/routes/LandingPage';

const router = createBrowserRouter([
	{
		// Home Page
		path: '/',
		element: <App />,
	},
	{
		// Consulta en Línea
		path: '/consulta_online/*',
		element: (
			<Routes>
				<Route
					path='/'
					element={<LandingPage />}
				/>
				<Route
					path='/consideraciones'
					element={<ConsiderationsPage />}
				/>
				<Route
					path='/paso1'
					element={<Paso1 />}
				/>
				<Route
					path='/paso2'
					element={<Paso2 />}
				/>
				<Route
					path='/paso3'
					element={<Paso3 />}
				/>
				<Route
					path='/paso4'
					element={<Paso4 />}
				/>
				<Route
					path='/paso5'
					element={<Paso5 />}
				/>
			</Routes>
		),
	},
	{
		// Newsletter
		path: '/newsletter',
		element: <Newsletter />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
