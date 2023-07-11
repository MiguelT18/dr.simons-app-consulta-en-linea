import { Link } from 'react-router-dom';
import { DarkButton } from '../../components/DarkButton';

export const Consulta = () => {
	return (
		<div>
			<h1 className='text-lg font-bold uppercase'>Hola Mundo</h1>
			<Link
				className='text-purple-500 text-md'
				to='/'>
				Home Page
			</Link>
			<DarkButton />
		</div>
	);
};
