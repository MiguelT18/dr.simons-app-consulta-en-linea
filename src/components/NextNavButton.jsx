import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function NextNavButton({ text, next }) {
	return (
		<Link
			to={next}
			className='bg-main-red text-white w-full flex items-center gap-2 text-sm px-3 py-2 rounded-md'>
			{text}
			<FontAwesomeIcon
				className='w-[20px] h-full text-white'
				icon={faCircleChevronRight}
			/>
		</Link>
	);
}
