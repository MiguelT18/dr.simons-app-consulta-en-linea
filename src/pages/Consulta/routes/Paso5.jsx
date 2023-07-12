import React from 'react';
import PrevNavButton from '../../../components/PrevNavButton';
import { DarkButton } from '../../../components/DarkButton';
import StepCounter from '../components/StepCounter';

export default function Paso5() {
	return (
		<div className='bg-gradient-linear-light dark:bg-gradient-linear-dark h-screen'>
			<PrevNavButton prev='/consulta_online/paso4' />
			<StepCounter />
			<DarkButton />
		</div>
	);
}
