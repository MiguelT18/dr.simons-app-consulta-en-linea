import React from 'react';
import PrevNavButton from '../../../components/pure/PrevNavButton';
import { DarkButton } from '../../../components/pure/DarkButton';
import StepCounter from '../../../components/pure/StepCounter';

export default function Paso5() {
	return (
		<div className='bg-gradient-linear-light dark:bg-gradient-linear-dark h-screen'>
			<PrevNavButton prev='/consulta_online/paso4' />
			<StepCounter />
			<DarkButton />
		</div>
	);
}
