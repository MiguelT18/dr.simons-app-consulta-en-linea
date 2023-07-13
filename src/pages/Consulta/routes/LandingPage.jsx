import React from 'react';
import PrevNavButton from '../../../components/PrevNavButton';
import { DarkButton } from '../../../components/DarkButton';
import LandingHeader from '../components/LandingPage/LandingHeader';
import LandingHero from '../components/LandingPage/LandingHero';

export default function LandingPage() {
	return (
		<>
			<PrevNavButton prev='/' />
			<LandingHeader />
			<main>
				<LandingHero></LandingHero>
			</main>
			<DarkButton />
		</>
	);
}
