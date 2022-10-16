import { Banner, DaisyNavbar } from '@/src/components';
import { Nosotros } from '@/src/i18n/sections/es';
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

      <div className='mx-auto my-10 h-[3px] w-3/4 rounded-sm bg-primary md:w-1/2 lg:hidden' />
      <Sevicios />
    </>
  );
};

export default Home;
