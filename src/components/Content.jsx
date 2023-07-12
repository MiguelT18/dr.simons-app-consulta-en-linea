import React from 'react';
import SocialMediaCard from './SocialMediaCard';
// Images
import ConsultaImg from '../assets/images/consulta-en-linea-card.webp';
import NewsletterImg from '../assets/images/newsletter-cristian.webp';
import TiktokImg from '../assets/images/tiktok-cristian-card.webp';
import InstagramImg from '../assets/images/instagram-cristian-card.webp';
import FacebookImg from '../assets/images/facebook-cristian-card.webp';

export default function Content() {
	return (
		<main className='bg-[#E9E9E9] dark:bg-dark overflow-x-hidden px-4 pb-10'>
			<h1 className='text-blue-light dark:text-white text-lg text-center font-sans font-bold mt-6 mb-2 uppercase'>
				¡Conéctate con el Dr.Cristian Simons!
			</h1>
			<p className='text-sm text-center font-montserrat leading-6'>
				Encuentra sus Redes Sociales y Consulta en Línea en un solo
				lugar.
				<br /> 👇 Dale click para seleccionar 👇
			</p>
			<div className='max-w-[1000px] mx-auto flex flex-wrap items-baseline justify-center gap-16 mt-8'>
				<SocialMediaCard
					title='Consulta en Línea'
					description='Atención médica en Internet.'
					classes='bg-gradient-linear-light dark:bg-gradient-linear-dark min-[450px]:mt-5'
					img={ConsultaImg}
					imgClass='w-[120px] min-[450px]:w-[140px] bottom-0 -right-2'
					Linkref='/consulta_online'
				/>

				<SocialMediaCard
					title='Newsletter'
					description='Salud nasal y bienestar general.'
					classes='bg-gradient-linear-newsletter flex-row-reverse'
					titleClass='text-end'
					textClass='text-end'
					img={NewsletterImg}
					imgClass='w-[120px] min-[450px]:w-[140px] bottom-0 left-0'
					LinkClass='justify-end'
					Linkref='/newsletter'
				/>

				<SocialMediaCard
					title='Mi TikTok'
					description='Descubre nuestros consejos de salud en TikTok.'
					classes='bg-gradient-linear-tiktok'
					img={TiktokImg}
					imgClass='w-[105px] min-[450px]:w-[125px] bottom-0 right-0'
					Linkref='https://www.tiktok.com/@drsimonscristian'
				/>

				<SocialMediaCard
					title='Mi Instagram'
					description='Conéctate conmigo en Instagram para consejos de bienestar.'
					classes='bg-gradient-linear-instagram flex-row-reverse'
					titleClass='text-end'
					textClass='text-end'
					img={InstagramImg}
					imgClass='w-[120px] min-[450px]:w-[140px] bottom-0 -left-3'
					LinkClass='justify-end'
					Linkref='https://www.instagram.com/drsimonscristian/'
				/>

				<SocialMediaCard
					title='Mi Facebook'
					description='Entérate de las últimas noticias y consejos de salud.'
					classes='bg-gradient-linear-facebook'
					img={FacebookImg}
					imgClass='w-[120px] min-[450px]:w-[140px] bottom-0 -right-3'
					Linkref='https://www.facebook.com/drcristiansimons'
				/>
			</div>
		</main>
	);
}
