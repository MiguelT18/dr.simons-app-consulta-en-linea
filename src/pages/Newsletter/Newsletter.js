import React from 'react';
import PrevButton from '../../components/PrevNavButton';
import { DarkButton } from '../../components/DarkButton';

export function Newsletter() {
	return (
		<div>
			<PrevButton prev='/' />
			<DarkButton />
		</div>
	);
}
