import React from 'react';
import HeaderImg from '../../assets/images/header-image.webp';
import DoctorNameImg from '../../assets/images/doctor-name.png';

export default function Header() {
	return (
		<header className='bg-blue-light dark:bg-blue-dark text-white py-4 px-2'>
			<div className='flex items-center justify-center gap-2'>
				<img
					className='w-header-img h-full transform -scale-x-95 border-2 border-white rounded-full'
					src={HeaderImg}
					alt='Dr. Simons'
				/>
				<img
					className='w-header-drname h-full'
					src={DoctorNameImg}
					alt='Dr. Simons name'
				/>
			</div>
			<span className='block relative h-[2px] w-[80%] max-w-[390px] mx-auto my-4 bg-white after:block after:w-[7px] after:h-[7px] after:bg-white after:rotate-45 after:absolute after:-top-[3px] before:block before:w-[7px] before:h-[7px] before:bg-white before:rotate-45 before:absolute before:-top-[3px] before:right-0'></span>
			<p className='max-w-[770px] mx-auto text-sm text-center font-montserrat leading-6'>
				¡Hola! Soy el Dr. Cristian Simons, especialista en rinoplastía
				ultrasónica y rinología. Mi misión es ayudarte a tener la nariz
				de tus sueños y a respirar mejor.
			</p>
		</header>
	);
}
