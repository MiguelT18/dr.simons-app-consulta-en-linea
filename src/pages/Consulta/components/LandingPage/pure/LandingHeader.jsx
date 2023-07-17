import React, { useState, useEffect } from 'react';

export default function ConsultaLanHeader() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount >= 1000) {
					clearInterval(interval);
					return prevCount;
				}
				return prevCount + 1;
			});
		});
	}, []);

	return (
		<header className='text-center bg-blue-light dark:bg-blue-dark text-white p-3 pt-3'>
			<h1 className='text-md uppercase mb-1'>
				Regístrate en la consulta en línea con el Dr. Simons
			</h1>
			<h2 className='text-md'>
				<span className='text-md text-[#FFA800] font-semibold'>
					+{count}
				</span>{' '}
				Pacientes satisfechos
			</h2>
		</header>
	);
}
