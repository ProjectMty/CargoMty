import { Banner, DaisyNavbar } from '@/src/components';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo title='Cargo E-commerce' description='Cargo E-commerce page.' />
      <DaisyNavbar title='Cargo E-commerce' />
      <Banner>
        Shipping your inventory and fulfilling
        <strong className='text-bold'>
          your sales to mexico has never been easier!
        </strong>
      </Banner>
    </>
  );
};

export default Home;
