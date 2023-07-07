import { Link } from 'react-router-dom';

export const Consulta = () => {
	return (
		<div>
			<h1>Hola Mundo</h1>
			<Link
				className='text-purple-500'
				to='/'>
				Home Page
			</Link>
		</div>
	);
};
