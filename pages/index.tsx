import { DaisyNavbar } from '@/src/components';
import { Banner } from '@/src/sections';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title='Cargo Monterrey' />
      <DaisyNavbar />
      <Banner />
    </>
  );
};

export default Home;
