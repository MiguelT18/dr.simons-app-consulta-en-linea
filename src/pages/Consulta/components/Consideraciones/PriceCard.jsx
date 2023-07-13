import React from 'react';

export default function HeaderPrice({ title, price, description }) {
	return (
		<div className='bg-white dark:bg-slate-800 w-full max-w-[420px] mx-auto h-full text-center text-dark dark:text-white py-3 px-3'>
			<h2 className='text-md font-medium font-montserrat'>{title}</h2>
			<h1 className='text-lg font-semibold pt-1'>{price}</h1>
			<p className='text-sm pt-1'>{description}</p>
		</div>
	);
}

HeaderPrice.defaultProps = {
	title: 'Untitled',
	price: 'Default price',
	description: 'Default description',
};
