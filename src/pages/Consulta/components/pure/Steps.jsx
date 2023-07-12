import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Steps() {
	const linkStyles =
		'bg-white text-dark w-10 h-10 max-[360px]:w-8 max-[360px]:h-8 flex items-center justify-center rounded-full';
	const activeLinkStyles = 'bg-[#FFA800] text-white';

	const location = useLocation();

	return (
		<div>
			<ul className='text-lg font-semibold text-center flex justify-around'>
				<Link
					to='/consulta_online/paso1'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso1'
							? activeLinkStyles
							: ''
					}`}>
					1
				</Link>
				<Link
					to='/consulta_online/paso2'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso2'
							? activeLinkStyles
							: ''
					}`}>
					2
				</Link>
				<Link
					to='/consulta_online/paso3'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso3'
							? activeLinkStyles
							: ''
					}`}>
					3
				</Link>
				<Link
					to='/consulta_online/paso4'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso4'
							? activeLinkStyles
							: ''
					}`}>
					4
				</Link>
				<Link
					to='/consulta_online/paso5'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso5'
							? activeLinkStyles
							: ''
					}`}>
					5
				</Link>
			</ul>
		</div>
	);
}
