import { Banner, DaisyNavbar } from '@/src/components';
import { Nosotros, Servicios } from '@/src/i18n/sections/es';
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
    </>
  );
};

export default Home;
