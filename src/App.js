import { Link } from 'react-router-dom';
import { DarkButton } from './components/DarkButton/DarkButton';

function App() {
	return (
		<div>
			<h1 className='font-bold'>Routes</h1>
			<Link
				className='text-purple-500'
				to='/consulta_online'>
				Consulta en Línea
			</Link>
			<br />
			<Link
				className='text-purple-500'
				to='/newsletter'>
				Newsletter
			</Link>

			<DarkButton />
		</div>
	);
}

export default App;
