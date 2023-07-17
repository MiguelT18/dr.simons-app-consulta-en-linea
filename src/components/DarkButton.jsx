import React, { useState, useEffect, useMemo } from 'react';
// Light Images
import RoundLightButton from '../assets/images/darkbutton/round-light-button.png';
import SwitchLightElements from '../assets/images/darkbutton/switch-light-elements.png';
// Dark Images
import RoundDarkButton from '../assets/images/darkbutton/round-dark-button.png';
import SwitchDarkElements from '../assets/images/darkbutton/switch-dark-elements.png';

export const DarkButton = () => {
	// Definiendo el valor actual del estado inicial por localStorage
	const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

	// Cambio entre clases según el estado de theme
	useEffect(() => {
		// Definir el tema guardado por el usuario
		localStorage.setItem('theme', theme);
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	// Función que cambia el modo de la aplicación
	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	// Cambio dinámico entre imagenes RoundImageButton
	const RoundImageButton = useMemo(() => {
		if (theme === 'dark') {
			return RoundDarkButton;
		} else {
			return RoundLightButton;
		}
	}, [theme]);

	// Cambio dinámico entre imagenes SwitchImageElements
	const SwitchImageElements = useMemo(() => {
		if (theme === 'dark') {
			return SwitchDarkElements;
		} else {
			return SwitchLightElements;
		}
	}, [theme]);

	// Cambio dinámico entre clases del RoundImageButton
	const SwitchRoundClasses = useMemo(
		() =>
			`absolute -top-1 transform transition-all ease-in-out duration-200 ${
				theme === 'dark' ? 'translate-x-[97%]' : 'translate-x-0'
			}`,
		[theme]
	);

	return (
		<div
			className='fixed bottom-0 right-0 mb-4 mr-4 z-40'
			onClick={handleThemeSwitch}>
			<img
				className={`${SwitchRoundClasses}`}
				src={RoundImageButton}
				alt='Round Light Button'
			/>
			<img
				src={SwitchImageElements}
				alt='Switch Dark Elements'
			/>
		</div>
	);
};
