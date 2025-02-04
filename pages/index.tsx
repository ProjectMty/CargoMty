import { Drawer, Footer } from '@/src/components';
import BuyAndShipBanner from '@/src/components/banners/buy-and-ship-banner';
import MainBanner from '@/src/components/banners/main-banner';
import { Carousel } from '@/src/components/carousel';
import { MAIN_MENU_ITEMS } from '@/src/components/navbar/routes';
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
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo />
      <Drawer items={MAIN_MENU_ITEMS} navbarLogo='Cargo Monterrey'>
        <Carousel>
          <MainBanner />
          <BuyAndShipBanner />
        </Carousel>
        <Nosotros />

        <div className='services-separator lg:hidden' />

        <Servicios />
        <section
          id='ecommerce'
          className='ecommerce-separator separator-buy-and-ship bg-bottom'
        >
          <h2 className='text-base font-normal uppercase text-white lg:text-2xl 2xl:text-3xl'>
            <strong>Conoce nuestro</strong> servicio{' '}
            <strong>Buy and Ship</strong>
          </h2>
          <Link href='/buy-and-ship' className='btn glass px-7'>
            Conocer más
          </Link>
        </section>
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
