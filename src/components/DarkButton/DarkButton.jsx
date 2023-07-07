//* hooks
import { useState } from 'react';

//* Imágenes
// Light Images
import RoundLightButton from '../../assets/images/darkbutton/round-light-button.png';
import SwitchLightElements from '../../assets/images/darkbutton/switch-light-elements.png';
// Dark Images
import RoundDarkButton from '../../assets/images/darkbutton/round-dark-button.png';
import SwitchDarkElements from '../../assets/images/darkbutton/switch-dark-elements.png';

export const DarkButton = () => {
	const [isTranslated, setIsTranslated] = useState(false);
	const [roundImageButton, setRoundImageButton] = useState(
		'../../assets/images/darkbutton/round-dark-button.png'
	);
	const [switchImageElement, setSwitchImageElement] = useState(
		'../../assets/images/darkbutton/switch-light-elements.png'
	);

	const handleTranslation = () => {
		setIsTranslated((prev) => !prev);
		if (!isTranslated) {
			setRoundImageButton(RoundDarkButton);
			setSwitchImageElement(SwitchDarkElements);
		} else {
			setRoundImageButton(RoundLightButton);
			setSwitchImageElement(SwitchLightElements);
		}
	};

	return (
		<div
			className='relative'
			onClick={handleTranslation}>
			<img
				className={`absolute -top-1 transform transition-all ease-in-out duration-200 ${
					isTranslated ? 'translate-x-full' : 'translate-x-0'
				}`}
				src={roundImageButton}
				alt='Round Light Button'
			/>
			<img
				src={switchImageElement}
				alt='Switch Dark Elements'
			/>
		</div>
	);
};
