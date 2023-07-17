import React from 'react';
import Slider from '../../../../components/Slider';
import img1 from '../../../../assets/images/consulta-en-linea/slider-images/webp/1_image.webp';
import img2 from '../../../../assets/images/consulta-en-linea/slider-images/webp/2_image.webp';
import img3 from '../../../../assets/images/consulta-en-linea/slider-images/webp/3_image.webp';
import img4 from '../../../../assets/images/consulta-en-linea/slider-images/webp/4_image.webp';
import img5 from '../../../../assets/images/consulta-en-linea/slider-images/webp/5_image.webp';
import img6 from '../../../../assets/images/consulta-en-linea/slider-images/webp/6_image.webp';
import NextNavButton from '../../../../components/NextNavButton';

const images = [img1, img2, img3, img4, img5, img6].map((img, index) => (
	<img
		className='w-full max-w-[420px] mx-auto'
		key={index}
		src={img}
		alt={`Slide ${index + 1}`}
	/>
));

export default function LandingTestimonies() {
	return (
		<div className='bg-[#e9e9e9] dark:bg-dark'>
			<div className='bg-[#e9e9e9] dark:bg-dark mx-auto px-4 pb-10'>
				<NextNavButton
					next='/consulta_online/consideraciones'
					text='Esta consulta es para mi'
					customClass='mx-auto mt-3'
				/>
			</div>
			<h1 className='text-center text-lg uppercase font-bold text-blue-light dark:text-white pb-8'>
				Este será tu proceso
			</h1>
		</div>
	);
}
