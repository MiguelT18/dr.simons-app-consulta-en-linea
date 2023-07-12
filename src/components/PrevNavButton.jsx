import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function PrevNavButton({ prev }) {
	return (
		<Link
			to={prev}
			className='w-10 right-5 top-5 fixed'>
			<FontAwesomeIcon
				className='w-full h-full text-main-red'
				icon={faCircleLeft}
				beatFade
			/>
		</Link>
	);
}
