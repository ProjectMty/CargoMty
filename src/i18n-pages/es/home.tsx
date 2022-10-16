import { DaisyNavbar } from '@/src/components';
import { Banner } from '@/src/sections';
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
        <span className='block'>
          Somos las <strong className='text-bold'>solución</strong> para
        </span>
        <strong className='text-bold'>todas</strong> tus compras
      </Banner>
    </>
  );
};

export default Home;
