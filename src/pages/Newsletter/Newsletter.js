import React from 'react';
import PrevButton from '../../components/pure/PrevNavButton';
import { DarkButton } from '../../components/pure/DarkButton';

export function Newsletter() {
	return (
		<div>
			<PrevButton prev='/' />
			<DarkButton />
		</div>
	);
}
