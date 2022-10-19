import { Banner, DaisyNavbar, AdventagesContainer } from '@/src/components';
import { NextSeo } from 'next-seo';
import { Services } from '@/src/i18n/sections/en';

const shippingAdvantages = [
  {
    title:
      'Strategic locations in the US and cross into Mexico within 1 business day',
  },
  { title: 'Low overhead operations to keep fulfillment costs down' },
  { title: 'Internal customs clearance team to avoid high 3rd party costs' },
  { title: 'Partnerships with Fedex, Estafeta, and RedPack in Mexico' },
];

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

      <Services />

      <section id='order-fulfillment' className='text-justify'>
        <h2 className='text-center'>
          Our order fulfillment services are fast, safe, and accurate.
        </h2>
        <p>
          Cargo Monterrey grew to serve more than 400 clients every month due to
          its attention to detail and cautious execution of each project. No two
          projects are alike. While we service a lot of clients, we are still a
          mid-size company with just one level management. Rest assured a
          manager and even the owners are monitoring your project.
        </p>
        <p>
          We specialize in order fulfillment for small and mid-size companies.
          Whether you ship 100 orders a month or 20,000 orders a month, we will
          fulfill each order quickly and accurately.
        </p>
        <p>
          We do this through inventory management, meticulously planned
          logistics, strategic locations, and constant communication throughout
          our team.
        </p>
        <p>
          Enjoy the freedom and the confidence you get when you partner with
          Cargo Monterrey!
        </p>
      </section>
      <section id='competitive-rates' className='text-justify'>
        <h2 className='text-center'>Competitive Rates</h2>
        <h3>
          Cargo Monterrey offers you the lowest fulfillment costs in the Mexico
          market. Our business is in volume.
        </h3>
        <p>
          Cargo Monterrey offers you the lowest fulfillment costs in the Mexico
          market. Our business is in volume.
        </p>
        <p>
          In Mexico, we are one of the largest 3PLs. We've secured deeply
          discounted shipping alliances with Mexico's most reputable couriers.
          We pass those savings on to you.
        </p>
        <p>
          We focus on the operation, not the bluff! We run very lean operations
          to keep the overhead down. We're in the warehouse business. Our
          offices are in the warehouses. Don't expect to see fancy office space
          when you tour any of our facilities. If it isn't essential to our
          operation, we don't have it!
        </p>
        <h3 className='text-center font-medium text-primary'>
          Faster Shipping at a Lower Cost
        </h3>
        <AdventagesContainer rows='2' advantages={shippingAdvantages} />
      </section>
    </>
  );
};

export default Home;
