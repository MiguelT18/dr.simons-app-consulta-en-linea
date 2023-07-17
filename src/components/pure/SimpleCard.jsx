import React from 'react';

export default function SimpleCard(props) {
	const { containerClass, title, text, imgSrc, imgClass } = props;

	return (
		<div className={`${containerClass}`}>
			<img
				className={`${imgClass}`}
				src={imgSrc}
				alt='Card Information'
			/>
			<h2 className='text-md font-semibold'>{title}</h2>
			<p className='text-sm mt-1 font-montserrat'>{text}</p>
		</div>
	);
}
