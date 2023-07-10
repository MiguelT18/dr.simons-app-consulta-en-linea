// import { Link } from 'react-router-dom';
import { DarkButton } from './components/DarkButton';
import Header from './components/pure/Header';
import Content from './components/pure/Content';

function App() {
	return (
		<>
			<Header />
			<Content />
			{/* <h1 className='font-bold'>Routes</h1>
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
			</Link> */}

			<DarkButton />
		</>
	);
}

export default App;
