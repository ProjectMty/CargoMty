import { Banner, DaisyNavbar } from '@/src/components';
import { NextSeo } from 'next-seo';

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
      <section
        id='us'
        className='mt-8 sm:my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28'
      >
        <h2 className='uppercase'>
          Cargo Monterrey is more than a freight forwarder. we are your complete
          cross border <br />
          e-commerce solution!
        </h2>
        <p className='uppercase'>
          We're a project 15 years in the making and we are still innovating to
          improve the way you do global e-commerce. Our area of expertise is
          cross border logistics. You ship to Texas, we ship to Mexico and
          deliver to Amazon FBA, Mercado Libre, or direct to your buyer's door.
        </p>
      </section>
      <div className='services-separator' />
      <section id='services' className='text-primary'>
        <h2>Services</h2>
        <h3 className='font-bold'>
          Freight Forwarding at increased speed and reduced rates!
        </h3>
        <p>
          Cargo Monterrey can be your freight forwarding solution for all or
          your North America business. You can have one consistent logistics
          partner to facilitate the transportation of your palletized product
          between locations in the US, Mexico, and Canada.
        </p>
        <p>
          Our experienced team of 3PL professionals offers a fully custom
          freight forwarding package tailored to your needs. Your needs. Your
          custom pricing. We understand every product, every marketplace, every
          margin is different.
        </p>
      </section>
    </>
  );
};

export default Home;
