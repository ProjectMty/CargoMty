import { Flags } from '@/src/components';
import { ReactNode } from 'react';

const Banner = ({ children }: { children: ReactNode }) => {
  return (
    <section id='banner' className='banner'>
      <h1 className='w-full px-[10%] text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
        {children}
      </h1>
      <Flags />
    </section>
  );
};

export default Banner;
