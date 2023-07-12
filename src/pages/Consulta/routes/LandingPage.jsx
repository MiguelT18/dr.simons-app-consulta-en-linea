import React from 'react';
import PrevNavButton from '../../../components/PrevNavButton';
import { DarkButton } from '../../../components/DarkButton';

export default function LandingPage() {
	return (
		<div>
			<PrevNavButton prev='/' />
			<h1 className='text-lg'>Holaa</h1>
			<DarkButton />
		</div>
	);
}
