import { Icon } from '@/src/components';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title='Cargo Monterrey' />
      <h1>
        Hello World <Icon lookup={['fab', 'react']} />
      </h1>
      <p className='text-primary'>text primary</p>
      <p className='text-secondary'>text secondary</p>
      <p className='text-accent'>text accent</p>
    </>
  );
};

export default Home;
