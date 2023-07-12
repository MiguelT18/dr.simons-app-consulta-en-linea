import React from 'react';
import ConsiderationCard from './pure/ConsiderationCard';
// Icons
import DoubtsIcon from '../../../assets/icons/Doubts.png';
import Gmail from '../../../assets/icons/Gmail.png';
import Internet from '../../../assets/icons/Internet.png';

export default function Considerations() {
	const drEmailAddress = 'contacto@drsimonscristian.com';

	return (
		<div className='flex flex-wrap gap-5 max-w-[1300px] mx-auto max-sm:mt-4 mt-8'>
			<ConsiderationCard
				customImgClass='w-considerations-img'
				customTextClass='text-sm text-center text-dark dark:text-white'
				img={Internet}
				alt='For any doubts you can check this out'
				text='Asegúrate de tener una conexión a Internet estable.'
			/>
			<ConsiderationCard
				customImgClass='w-considerations-img'
				customTextClass='text-sm text-center text-dark dark:text-white'
				img={DoubtsIcon}
				alt='Internet Connection'
				text='Procura utilizar un correo electrónico que uses frecuentemente y procura escribirlo bien'
			/>
			<div className='w-full text-center'>
				<ConsiderationCard
					customImgClass='w-considerations-img'
					customTextClass='text-sm text-center text-dark dark:text-white'
					img={Gmail}
					alt='Check your email'
					text='Tus dudas adicionales las puedes aclarar a través del siguiente correo:'
				/>
				<a
					className='text-sm text-center text-blue-500 w-full'
					href={`mailto: ${drEmailAddress}`}>
					{drEmailAddress}
				</a>
			</div>
		</div>
	);
}
