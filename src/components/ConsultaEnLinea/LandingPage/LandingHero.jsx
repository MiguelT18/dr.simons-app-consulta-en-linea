import React from 'react';
import LandingTxtLists from './LandingTxtLists';
import NextNavButton from '../../pure/NextNavButton';

export default function LandingHero() {
	const oportunitiesEmoji = '✅';
	const oportunities = [
		{
			emoji: oportunitiesEmoji,
			text: 'Conocer a nuestro equipo y recibir un servicio personalizado que te hará sentir en confianza.',
		},
		{
			emoji: oportunitiesEmoji,
			text: 'Compartir tus deseos y expectativas para tu nariz, y recibir el consejo experto del Dr. Simons para lograr el resultado deseado.',
		},
		{
			emoji: oportunitiesEmoji,
			text: 'Obtener un diagnóstico preciso de las características de tu nariz y recibir un plan de tratamiento personalizado, adaptado a tus necesidades específicas.',
		},
		{
			emoji: oportunitiesEmoji,
			text: 'Aprender sobre los detalles del proceso de la cirugía, incluyendo el tiempo de recuperación y las precauciones necesarias.',
		},
		{
			emoji: oportunitiesEmoji,
			text: 'Obtener un presupuesto detallado y transparente para tu rinoplastia estética o funcional, con opciones de financiamiento disponibles.',
		},
	];

	return (
		<section className='h-full lg:h-screen bg-hero-mob-pattern bg-center bg-no-repeat bg-cover min-[1024px]:bg-hero-desk-pattern'>
			<h2 className='mx-auto max-w-[1500px] text-white text-lg text-center uppercase font-semibold pt-4 px-4 lg:mb-10'>
				Descubre cómo una rinoplastia personalizada con el Dr. Simons
				puede ayudarte a alcanzar tus metas estéticas y funcionales
			</h2>
			<div className='max-w-[1500px] grid justify-center mx-auto items-center lg:grid-cols-2 gap-5 pb-10 px-5'>
				<div className='w-full'>
					<h1 className='text-white max-[1023px]:text-center text-lg font-semibold py-4'>
						Durante tu Consulta tendrás la oportunidad de:
					</h1>
					<LandingTxtLists
						items={oportunities}
						customListClass='text-white'
					/>
					<NextNavButton
						customClass='mx-auto'
						next='/consulta_online/consideraciones'
						text='Quiero reservar mi consulta'
					/>
				</div>
				<iframe
					className='w-full max-w-[720px] h-fit aspect-video'
					src='https://www.youtube.com/embed/F1cjxLL1KeQ'
					title='Consulta en línea con el Dr. Cristian Simons: todo lo que necesitas saber'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen></iframe>
			</div>
		</section>
	);
}
