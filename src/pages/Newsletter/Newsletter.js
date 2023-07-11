import { Link } from 'react-router-dom';

export function Newsletter() {
	return (
		<div>
			<h1>Newsletter</h1>
			<Link
				className='text-purple-500'
				to='..'>
				Home Page
			</Link>
		</div>
	);
}
