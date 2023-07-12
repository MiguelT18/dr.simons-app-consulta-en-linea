import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function NextNavButton() {
	return (
		<Link
			to='/consulta_online/paso1'
			className='bg-main-red text-white w-full flex items-center gap-2 text-sm px-3 py-2 rounded-md'>
			Continuar
			<FontAwesomeIcon
				className='w-[20px] h-full text-white'
				icon={faCircleChevronRight}
			/>
		</Link>
	);
}
