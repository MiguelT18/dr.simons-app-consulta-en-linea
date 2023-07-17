import React from 'react';
import PrevButton from '../../../components/pure/PrevNavButton';
import { DarkButton } from '../../../components/pure/DarkButton';
import StepCounter from '../../../components/pure/StepCounter';

export default function Paso1() {
	return (
		<div className='bg-gradient-linear-light dark:bg-gradient-linear-dark h-screen'>
			<PrevButton prev='/consulta_online/consideraciones' />
			<StepCounter />
			<DarkButton />
		</div>
	);
}
