import React from 'react';
import PrevNavButton from '../../../components/pure/PrevNavButton';
import { DarkButton } from '../../../components/pure/DarkButton';
import LandingHeader from '../../../components/ConsultaEnLinea/LandingPage/LandingHeader';
import LandingHero from '../../../components/ConsultaEnLinea/LandingPage/LandingHero';
import Footer from '../../../components/shared/Footer';
import LandingCopy from '../../../components/ConsultaEnLinea/LandingPage/LandingCopy';
import LandingTestimonies from '../../../components/ConsultaEnLinea/LandingPage/LandingTestimonies';

export function LandingPage() {
	return (
		<>
			<DarkButton />
			<PrevNavButton prev='/' />
			<LandingHeader />
			<main>
				<LandingHero />
				<LandingCopy />
				<LandingTestimonies />
			</main>
			<Footer />
		</>
	);
}
