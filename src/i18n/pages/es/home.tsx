import { Banner, DaisyNavbar, Footer } from '@/src/components';
import {
  Contacto,
  Ecommerce,
  Nosotros,
  Partnerships,
  Proceso,
  Servicios,
  Tarifas,
  Ubicaciones,
} from '@/src/i18n/sections/es';
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo
        title='Cargo Monterrey'
        description='Cargo Monterrey es tu solución para todas tus compras e importaciones de USA y China.'
      />
      <DaisyNavbar />
      <Banner>
        Somos las <strong className='text-bold'>solución</strong> para
        <br />
        <strong className='text-bold'>todas</strong> tus compras
      </Banner>
      <Nosotros />

      <div className='services-separator lg:hidden' />

      <Servicios />
      <Proceso />
      <Tarifas />
      <Partnerships />
      <Ubicaciones />
      <Ecommerce />
      <Contacto />
      <Footer />
    </>
  );
};

export default Home;
