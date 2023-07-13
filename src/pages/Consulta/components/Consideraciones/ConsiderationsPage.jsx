import { DarkButton } from '../../../../components/DarkButton';
// import Prices from './Prices';
import PrevNavButton from '../../../../components/PrevNavButton';
// import Considerations from './Considerations';
// import ConsiderationCard from './ConsiderationCard';
// import WarningIcon from '../../../../assets/icons/Warning.png';
// import Footer from '../../../../components/pure/Footer';
// import NextNavButton from '../../../../components/NextNavButton';

// TODO: Reconstruir la página de Consideraciones
export const ConsiderationsPage = () => {
	return (
		<>
			<div className='bg-[#E9E9E9] dark:bg-[#222] overflow-x-hidden'>
				<h1 className='text-blue-light dark:text-white text-lg text-center font-bold uppercase py-3 sm:py-5'>
					Consideraciones
				</h1>
				<DarkButton />
				<PrevNavButton prev='/consulta_online' />
			</div>
		</>
	);
};

// 	<p className='max-w-[1100px] mx-auto text-center text-sm max-sm:mt-4 mt-8 leading-6'>
// 		La Consulta en Línea es una preconsulta donde por medio de una
// 		encuesta de tu historial médico y fotografías recibirás un
// 		informe médico y presupuesto a tu correo electrónico. Asimismo
// 		obtendrás una consulta privada online con el Dr. Cristian Simons
// 		especialista en cirugía de rinoplastia ultrasónica.
// 	</p>
// 	<Considerations />
// 	<div className='px-3'>
// 		<ConsiderationCard
// 			customClass='bg-gradient-linear-light dark:bg-gradient-linear-dark rounded-md sm:rounded-xl text-white mt-12 relative py-2 px-2 mb-8'
// 			customTextClass='text-sm text-center text-white mt-1 pb-2'
// 			customImgClass='w-warning-img absolute -right-3 -top-4 animate-bounce'
// 			img={WarningIcon}
// 			alt='Warning'
// 			title='Advertencia'
// 			text='Al realizar el proceso de la consulta en línea, tendrás un plazo de siete días continuos, para concretar la misma posterior a esto deberás ingresar como una nueva consulta.'
// 		/>
// 	</div>
// 	<div className='w-fit mx-auto pb-8'>
// 		<NextNavButton
// 			text='Continuar'
// 			next='/consulta_online/paso1'
// 		/>
// 	</div>
// 	<Footer />
