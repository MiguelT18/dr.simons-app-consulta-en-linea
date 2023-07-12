import React from 'react';
import HeaderPrice from './pure/HeaderPrice';

export default function Header() {
	return (
		<div className='flex flex-wrap gap-6 max-w-[1300px] mx-auto'>
			<HeaderPrice
				title='Depósito o Pago QR'
				price='250 Bs'
				description='Deberás solicitar el código QR a nuestro soporte.'
			/>
			<HeaderPrice
				title='Método Internacional'
				price='$39.99 / 270 Bs'
				description='Paga de forma segura a través de Hotmart.'
			/>
		</div>
	);
}
