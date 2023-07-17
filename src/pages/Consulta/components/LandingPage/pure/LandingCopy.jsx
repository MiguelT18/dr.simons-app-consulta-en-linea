import React from 'react';
import LandingTxtLists from './LandingTxtLists';
import NextNavButton from '../../../../../components/NextNavButton';

export default function LandingCopy() {
	const emojiAboveCopy = '🔴';
	const aboveCopy = [
		{
			emoji: emojiAboveCopy,
			text: 'Tienes más de 16 años y te sientes inseguro o avergonzado por la forma de tu nariz.',
		},
		{
			emoji: emojiAboveCopy,
			text: 'Tienes dificultad para respirar debido a desvíos, obstrucciones o asimetrías nasales.',
		},
		{
			emoji: emojiAboveCopy,
			text: 'Te gustaría disfrutar de una nariz bonita y estética que haga juego con tus rasgos faciales.',
		},
		{
			emoji: emojiAboveCopy,
			text: 'Te gustaría tener un cambio en tu vida por siempre.',
		},
	];

	const emojiBelowCopy = '🎉';
	const belowCopy = [
		{
			emoji: emojiBelowCopy,
			text: 'Obtén el resultado deseado sin preocupaciones. El Dr. Simons te guiará para lograr los cambios que buscas.',
		},
		{
			emoji: emojiBelowCopy,
			text: 'Recupérate rápidamente y sin moretones. Nuestras técnicas avanzadas y atención postoperatoria te brindan tranquilidad.',
		},
		{
			emoji: emojiBelowCopy,
			text: 'Experimenta una cirugía sin dolor. Nuestro equipo de anestesia y experiencia en rinoplastias te garantizan confort absoluto.',
		},
		{
			emoji: emojiBelowCopy,
			text: 'Consigue los resultados deseados desde el principio. Evita la necesidad de operaciones adicionales para corregir errores. Confía en nuestra experiencia y enfoque preciso.',
		},
	];

	return (
		<section className='bg-[#E9E9E9] dark:bg-dark pb-8'>
			<h1 className='text-center text-lg text-blue-light uppercase font-bold dark:text-white py-4'>
				Esta consulta es para ti si...
			</h1>
			<div className='bg-white dark:bg-slate-800 w-[90%] max-w-[1080px] mx-auto mb-8 px-3 pb-1 pt-4'>
				<LandingTxtLists
					items={aboveCopy}
					customListClass='text-dark dark:text-white'
				/>
			</div>
			<NextNavButton
				next='/consulta_online/consideraciones'
				customClass='mx-auto mb-8'
				text='Esta consulta es para mi'
			/>
			<span className='block mx-auto w-[80%] max-w-[1080px] h-[2px] bg-black dark:bg-white'></span>
			<div className='bg-white dark:bg-slate-800 w-[90%] max-w-[1080px] mx-auto mt-10 px-3 pb-1 pt-4'>
				<LandingTxtLists
					items={belowCopy}
					customListClass='text-dark dark:text-white'
				/>
			</div>
		</section>
	);
}
