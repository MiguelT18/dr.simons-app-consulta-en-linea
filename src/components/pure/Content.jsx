import React from 'react';
import SocialMediaCard from '../SocialMediaCard';

export default function Content() {
	return (
		<main>
			<h1 className='text-blue-light dark:text-white text-lg text-center font-sans font-bold mt-4 mb-2 uppercase'>
				¡Conéctate con el Dr.Cristian Simons!
			</h1>
			<p className='text-sm text-center font-montserrat leading-5'>
				Encuentra sus Redes Sociales y Consulta en Línea en un solo
				lugar.
				<br /> 👇 Dale click para seleccionar 👇
			</p>
			<SocialMediaCard />
		</main>
	);
}
