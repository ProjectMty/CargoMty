import { Banner, Drawer, Footer } from '@/src/components';
import { EN_MENU_ITEMS } from '@/src/components/navbar/routes';
import {
  CompetitiveRates,
  Contact,
  Costs,
  Ecommerce,
  OrderFulfillment,
  Process,
  Services,
  Us,
} from '@/src/i18n/sections/en';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo title='Cargo E-commerce' description='Cargo E-commerce page.' />
      <Drawer items={EN_MENU_ITEMS} navbarLogo='Cargo E-commerce'>
        <Banner>
          Shipping your inventory and fulfilling{' '}
          <strong className='text-bold'>
            your sales to mexico has never been easier!
          </strong>
        </Banner>
        <Us />
        <div className='services-separator' />
        <Services />
        <OrderFulfillment />
        <CompetitiveRates />
        <Costs />
        <Process />
        <Ecommerce />
        <Contact />
        <Footer />
      </Drawer>
    </>
  );
};

export default Home;
