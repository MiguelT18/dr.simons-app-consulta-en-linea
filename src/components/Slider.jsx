import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider({ content }) {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}>
			{content.map((item, index) => (
				<SwiperSlide key={index}>{item}</SwiperSlide>
			))}
		</Swiper>
	);
}
