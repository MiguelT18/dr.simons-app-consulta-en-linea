import React from 'react';
import ConsultaImg from '../assets/images/consulta-en-linea-card.webp';

export default function SocialMediaCard({ title, description, img }) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
			<img
				src={ConsultaImg}
				alt='Dr. Simons card content'
			/>
		</div>
	);
}

SocialMediaCard.defaultProps = {
	title: 'Undefined',
	description: 'Undefined',
};
