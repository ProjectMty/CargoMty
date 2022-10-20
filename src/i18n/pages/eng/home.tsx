import { Banner, ContactForm, DaisyNavbar } from '@/src/components';
import {
  CompetitiveRates,
  Costs,
  OrderFulfillment,
  Process,
  Services,
  Us,
} from '@/src/i18n/sections/en';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <NextSeo title='Cargo E-commerce' description='Cargo E-commerce page.' />
      <DaisyNavbar title='Cargo E-commerce' />
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
      <section
        id='ecommerce'
        className='cargomty-mex section-full lg:space-y-4'
      >
        <h2 className='text-base font-normal uppercase text-white lg:text-2xl 2xl:text-3xl'>
          <strong>Get to know</strong> our service
          <br />
          for <strong>Mexico</strong>
        </h2>
        <Link href='/' locale='es'>
          <a className='btn glass px-7'>Find out more</a>
        </Link>
      </section>
      <section id='contacto' className='section-full mt-8'>
        <h2 className='lg:w-4/5'>
          Contact us today to discuss how we can launch your e-commerce business
          in Mexico today!
        </h2>
        <ContactForm
          title='Start shipping today!'
          phone='956-284-6632'
          email='amzshipments@cargomty.com'
          btnMessage='Send'
          nameInput={{ label: 'Name', placeholder: 'Name' }}
          phoneInput={{ label: 'Phone', placeholder: 'Phone' }}
          emailInput={{ label: 'Email', placeholder: 'Email' }}
          subjectInput={{ label: 'Message', placeholder: 'How can we assist?' }}
        />
      </section>
    </>
  );
};

export default Home;
