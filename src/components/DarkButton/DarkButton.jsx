import React, { useState, useEffect } from 'react';
// Light Images
import RoundLightButton from '../../assets/images/darkbutton/round-light-button.png';
import SwitchLightElements from '../../assets/images/darkbutton/switch-light-elements.png';
// Dark Images
// import RoundDarkButton from '../../assets/images/darkbutton/round-dark-button.png';
// import SwitchDarkElements from '../../assets/images/darkbutton/switch-dark-elements.png';

export const DarkButton = () => {
	const [theme, setTheme] = useState('light');

	// Cambio entre clases según el estado de theme
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div
			onClick={handleThemeSwitch}
			className='relative'>
			<img
				className='absolute -top-1'
				src={RoundLightButton}
				alt='Round Light Button'
			/>
			<img
				src={SwitchLightElements}
				alt='Switch Dark Elements'
			/>
		</div>
	);
};
