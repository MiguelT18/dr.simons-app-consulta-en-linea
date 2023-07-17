import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Steps() {
	const linkStyles =
		'w-12 h-12 max-[440px]:w-10 max-[440px]:h-10 max-[380px]:w-8 max-[380px]:h-8 flex items-center justify-center rounded-full';
	const activeLinkStyles = 'bg-[#FFA800] text-white';

	const location = useLocation();

	return (
		<div>
			<ul className='text-lg font-semibold text-center flex justify-evenly'>
				<Link
					to='/consulta_online/paso1'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso1'
							? activeLinkStyles
							: 'bg-white text-dark'
					}`}>
					1
				</Link>
				<Link
					to='/consulta_online/paso2'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso2'
							? activeLinkStyles
							: 'bg-white text-dark'
					}`}>
					2
				</Link>
				<Link
					to='/consulta_online/paso3'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso3'
							? activeLinkStyles
							: 'bg-white text-dark'
					}`}>
					3
				</Link>
				<Link
					to='/consulta_online/paso4'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso4'
							? activeLinkStyles
							: 'bg-white text-dark'
					}`}>
					4
				</Link>
				<Link
					to='/consulta_online/paso5'
					className={`${linkStyles} ${
						location.pathname === '/consulta_online/paso5'
							? activeLinkStyles
							: 'bg-white text-dark'
					}`}>
					5
				</Link>
			</ul>
		</div>
	);
}
