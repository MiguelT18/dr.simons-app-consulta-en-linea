import React from 'react';
import PriceCard from './PriceCard';

export default function Price() {
	return (
		<div className='flex flex-wrap justify-center gap-10 mx-4'>
			<PriceCard
				title='Método Internacional'
				price='$39.99 / 270 Bs'
				description='Paga de forma segura a través de Hotmart.'
			/>
			<PriceCard
				title='Depósito o Pago QR'
				price='250 Bs'
				description='Deberás solicitar el código QR a nuestro soporte.'
			/>
		</div>
	);
}
