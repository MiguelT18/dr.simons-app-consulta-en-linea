import React from 'react';

export default function LandingTxtLists({ items }) {
	return (
		<ul className='list-none max-w-[1080px] mx-auto px-4'>
			{items.map((item, index) => (
				<li
					key={index}
					className='text-sm text-white pb-4'>
					{item.emoji} {item.text}
				</li>
			))}
		</ul>
	);
}
