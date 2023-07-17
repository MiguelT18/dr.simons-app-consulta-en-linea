import React from 'react';

export default function PriceCard({ title, price, description }) {
	return (
		<div className='bg-white text-dark dark:bg-slate-800 dark:text-white w-full max-w-[400px] text-center px-3 py-3'>
			<h2 className='text-md font-semibold'>{title}</h2>
			<h1 className='text-lg font-semibold'>{price}</h1>
			<p className='text-sm mt-1'>{description}</p>
		</div>
	);
}
