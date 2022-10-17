import { Banner, DaisyNavbar } from '@/src/components';
import { listaServicios } from '@/src/components/services/lista-servicios';
import ServiceItem from '@/src/components/services/service-item';
import { Nosotros } from '@/src/i18n/sections/es';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { NextSeo } from 'next-seo';
import Sevicios from '../../sections/es/sevicios';

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

      <Sevicios />

      <div>
        {listaServicios.map(({ id, ...props }) => (
          <ServiceItem key={id} {...props} />
        ))}
      </div>
    </>
  );
};

export default Home;
