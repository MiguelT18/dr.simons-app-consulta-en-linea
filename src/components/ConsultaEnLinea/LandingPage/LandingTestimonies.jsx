import React from 'react';
// import NextNavButton from '../../pure/NextNavButton';
import SimpleCard from '../../pure/SimpleCard';
//* Images
import Register from '../../../assets/icons/landing-page/registro.png';
import Payment from '../../../assets/icons/landing-page/tarjeta-de-credito.png';
import Consultant from '../../../assets/icons/landing-page/consultante.png';
import Live from '../../../assets/icons/landing-page/transmision-en-vivo.png';

export default function LandingTestimonies() {
	const CardContainerStyles =
		'h-full w-full bg-blue-light dark:bg-blue-dark text-white px-3 py-3 max-w-[340px] rounded-md md:rounded-lg';

	return (
		<div className='bg-[#e9e9e9] dark:bg-dark'>
			<h1 className='text-center text-lg uppercase font-bold text-dark dark:text-white pb-6'>
				Este será tu proceso
			</h1>
			<div className='flex flex-wrap justify-center gap-6 pb-10 px-4 overflow-x-hidden'>
				<SimpleCard
					imgSrc={Register}
					imgClass='w-[65px] md:w-[80px] mb-3'
					title='Registro para la consulta'
					text='Deberás registrarte en la Consulta y llenar el formulario con tus datos.'
					containerClass={CardContainerStyles}
				/>
				<SimpleCard
					imgSrc={Payment}
					imgClass='w-[65px] md:w-[80px] mb-3'
					title='Realiza el pago'
					text='Una vez registrado en la consulta en línea deberás realizar el pago.'
					containerClass={CardContainerStyles}
				/>
				<SimpleCard
					imgSrc={Consultant}
					imgClass='w-[65px] md:w-[80px] mb-3'
					title='Programación en Línea'
					text='Programa tu consulta contactando a nuestro soporte.'
					containerClass={CardContainerStyles}
				/>
				<SimpleCard
					imgSrc={Live}
					imgClass='w-[65px] md:w-[80px] mb-3'
					title='Asiste a la reunión'
					text='Reunión por Google Meets. Espera el correo con el enlace para unirte.'
					containerClass={CardContainerStyles}
				/>
			</div>
		</div>
	);
}
