import React from 'react';
import PriceCard from '../Consideraciones/Prices';

export default function Prices() {
	return (
		<div className='flex flex-wrap gap-6 max-w-[1300px] mx-auto'>
			<PriceCard
				title='Depósito o Pago QR'
				price='250 Bs'
				description='Deberás solicitar el código QR a nuestro soporte.'
			/>
			<PriceCard
				title='Método Internacional'
				price='$39.99 / 270 Bs'
				description='Paga de forma segura a través de Hotmart.'
			/>
		</div>
	);
}
