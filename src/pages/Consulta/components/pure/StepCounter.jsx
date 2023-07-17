import React from 'react';
import Steps from './Steps';

export default function StepCounter() {
	return (
		<header>
			<h1 className='text-white text-center text-lg font-sans font-bold uppercase pt-3 pb-1'>
				Datos Personales
			</h1>
			<p className='text-white text-center text-sm font-montserrat'>
				En este paso deberás proporcionar tus datos personales
			</p>
			<div className='w-[80%] max-w-[660px] mx-auto'>
				<span className='bg-white w-full h-[2px] block my-4 rounded-full'></span>
				<Steps />
				<span className='bg-white w-full h-[2px] block my-4 rounded-full'></span>
			</div>
		</header>
	);
}
