import { Banner, Drawer, Footer } from '@/src/components';
import { ES_MENU_ITEMS } from '@/src/components/navbar/routes';
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
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo
        title='Cargo Monterrey - Logística Aplicada'
        description='Todos los trámites son cumpliendo las normas de cada país en el que trabajamos. Damos certeza y aseguramos los pedidos que manejamos.'
      />
      <Drawer items={ES_MENU_ITEMS} navbarLogo='Cargo Monterrey'>
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
