import { Banner, Drawer, Footer } from '@/src/components';
import { MENU_ITEMS } from '@/src/components/navbar/routes';
import {
  Contacto,
  Ecommerce,
  Nosotros,
  Partnerships,
  Proceso,
  Servicios,
  Tarifas,
  Ubicaciones,
} from '@/src/sections';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo />
      <Drawer items={MENU_ITEMS} navbarLogo='Cargo Monterrey'>
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
      </Drawer>
    </>
  );
};

export default Home;
