import React from 'react';
import PrevButton from '../../../components/PrevNavButton';
import { DarkButton } from '../../../components/DarkButton';
import StepCounter from '../components/StepCounter';

export default function Paso1() {
	return (
		<div className='bg-gradient-linear-light dark:bg-gradient-linear-dark h-screen'>
			<PrevButton prev='/consulta_online' />
			<StepCounter />
			<DarkButton />
		</div>
	);
}
