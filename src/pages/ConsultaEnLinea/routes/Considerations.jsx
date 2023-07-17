import { DarkButton } from '../../../components/pure/DarkButton';
import PrevNavButton from '../../../components/pure/PrevNavButton';
import ConsiderationCardContainer from '../../../components/ConsultaEnLinea/Considerations/ConsiderationCardContainer';
import ConsiderationCard from '../../../components/ConsultaEnLinea/Considerations/ConsiderationCard';
import WarningIcon from '../../../assets/icons/considerations/Warning.png';
import Footer from '../../../components/shared/Footer';
import NextNavButton from '../../../components/pure/NextNavButton';
import Price from '../../../components/ConsultaEnLinea/Considerations/Price';

const ConsiderationsPage = () => {
	return (
		<>
			<DarkButton />
			<PrevNavButton prev='/consulta_online' />
			<div className='bg-[#E9E9E9] dark:bg-[#222] overflow-x-hidden'>
				<h1 className='text-blue-light dark:text-white text-lg text-center font-bold uppercase py-3 sm:py-5'>
					Consideraciones
				</h1>
				<Price />
				<p className='max-w-[1100px] mx-auto px-4 text-center text-sm max-sm:mt-4 mt-8 leading-6'>
					La Consulta en Línea es una preconsulta donde por medio de
					una encuesta de tu historial médico y fotografías recibirás
					un informe médico y presupuesto a tu correo electrónico.
					Asimismo obtendrás una consulta privada online con el Dr.
					Cristian Simons especialista en cirugía de rinoplastia
					ultrasónica.
				</p>
				<ConsiderationCardContainer />
				<div className='mx-4 mb-6'>
					<ConsiderationCard
						title='Advertencia'
						text='Al realizar el proceso de la consulta en línea, tendrás un plazo de siete días continuos, para concretar la misma posterior a esto deberás ingresar como una nueva consulta.'
						img={WarningIcon}
						customClass='bg-gradient-linear-light dark:bg-gradient-linear-dark text-white text-center rounded-md md:rounded-xl mt-8 mb-5 px-3 pt-2'
						customImgClass='w-warning-img absolute -right-4 -top-6'
						customTextClass='pb-3 text-sm'
					/>
					<NextNavButton
						customClass='mx-auto'
						text='Continuar'
						next='/consulta_online/paso1'
					/>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default ConsiderationsPage;
