import React from 'react';

export default function LandingTxtLists({ items, customListClass }) {
	return (
		<ul className='list-none'>
			{items.map((item, index) => (
				<li
					key={index}
					className={`text-sm pb-4 ${customListClass}`}>
					{item.emoji} {item.text}
				</li>
			))}
		</ul>
	);
}
