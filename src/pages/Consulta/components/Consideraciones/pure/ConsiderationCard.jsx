import React from 'react';

export default function ConsiderationCard(props) {
	const {
		customClass,
		customImgClass,
		customTextClass,
		title,
		text,
		img,
		alt,
	} = props;

	return (
		<div className={`${customClass} relative max-w-[480px] mx-auto`}>
			<img
				className={`mx-auto ${customImgClass}`}
				src={img}
				alt={alt}
			/>
			<h2 className='text-center text-md font-semibold'>{title}</h2>
			<p className={`${customTextClass}`}>{text}</p>
		</div>
	);
}

ConsiderationCard.defaultProps = {
	text: 'Default description',
	alt: 'Default card',
};
