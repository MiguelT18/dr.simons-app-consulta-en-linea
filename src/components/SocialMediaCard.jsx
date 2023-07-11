import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialMediaCard({
	title,
	description,
	img,
	classes,
	titleClass,
	textClass,
	imgClass,
	LinkClass,
	Linkref,
}) {
	return (
		<div
			className={`${classes} text-white w-full max-w-[400px] h-full relative flex rounded-md px-3 py-3`}>
			<Link
				to={Linkref}
				className={`w-full flex ${LinkClass}`}>
				<div className='w-[65%] max-w-[240px]'>
					<h1 className={`${titleClass} text-md font-semibold mb-1`}>
						{title}
					</h1>
					<p className={`${textClass} text-sm`}>{description}</p>
				</div>
				<img
					className={`${imgClass} absolute`}
					src={img}
					alt='Dr. Simons card content'
				/>
			</Link>
		</div>
	);
}

SocialMediaCard.defaultProps = {
	title: 'Undefined',
	description: 'Undefined',
};
