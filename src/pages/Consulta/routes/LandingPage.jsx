import React from 'react';
import PrevNavButton from '../../../components/PrevNavButton';
import { DarkButton } from '../../../components/DarkButton';
import LandingHeader from '../components/LandingPage/LandingHeader';
import LandingHero from '../components/LandingPage/LandingHero';
import Footer from '../../../components/pure/Footer';
import LandingCopy from '../components/LandingPage/LandingCopy';
import LandingTestimonies from '../components/LandingPage/LandingTestimonies';

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
