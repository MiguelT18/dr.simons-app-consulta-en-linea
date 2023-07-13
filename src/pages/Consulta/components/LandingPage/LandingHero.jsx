import React from 'react';
import LandingTxtLists from './LandingTxtLists';
import NextNavButton from '../../../../components/NextNavButton';

export default function LandingHero() {
	const oportunities = [
		{
			emoji: '✅',
			text: 'Conocer a nuestro equipo y recibir un servicio personalizado que te hará sentir en confianza.',
		},
		{
			emoji: '✅',
			text: 'Compartir tus deseos y expectativas para tu nariz, y recibir el consejo experto del Dr. Simons para lograr el resultado deseado.',
		},
		{
			emoji: '✅',
			text: 'Obtener un diagnóstico preciso de las características de tu nariz y recibir un plan de tratamiento personalizado, adaptado a tus necesidades específicas.',
		},
		{
			emoji: '✅',
			text: 'Aprender sobre los detalles del proceso de la cirugía, incluyendo el tiempo de recuperación y las precauciones necesarias.',
		},
		{
			emoji: '✅',
			text: 'Obtener un presupuesto detallado y transparente para tu rinoplastia estética o funcional, con opciones de financiamiento disponibles.',
		},
	];

	return (
		<section className='bg-hero-mob-pattern bg-center bg-no-repeat bg-cover lg:bg-hero-desk-pattern'>
			<h2 className='max-w-[1080px] mx-auto text-white text-lg text-center font-semibold pt-2 pb-5'>
				Descubre cómo una rinoplastia personalizada con el Dr. Simons
				puede ayudarte a alcanzar tus metas estéticas y funcionales
			</h2>
			<iframe
				className='w-full max-w-[720px] mx-auto aspect-video px-4'
				src='https://www.youtube.com/embed/F1cjxLL1KeQ'
				title='Consulta en línea con el Dr. Cristian Simons: todo lo que necesitas saber'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen></iframe>
			<h1 className='text-white text-center text-lg font-bold uppercase py-4'>
				Durante tu Consulta tendrás la oportunidad de:
			</h1>
			<LandingTxtLists items={oportunities} />
			<div className='w-fit mx-auto pb-8'>
				<NextNavButton
					next='/consulta_online/consideraciones'
					text='Quiero reservar mi consulta'
				/>
			</div>
		</section>
	);
}
