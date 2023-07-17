import React from 'react';
import PrevNavButton from '../../../components/pure/PrevNavButton';
import { DarkButton } from '../../../components/pure/DarkButton';
import StepCounter from '../../../components/pure/StepCounter';

export default function Paso3() {
	return (
		<div className='bg-gradient-linear-light dark:bg-gradient-linear-dark h-screen'>
			<PrevNavButton prev='/consulta_online/paso2' />
			<StepCounter />
			<DarkButton />
		</div>
	);
}
