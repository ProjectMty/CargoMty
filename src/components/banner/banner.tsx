import { ReactNode } from 'react';
import { Flags } from '../flags';

type Props = {
  children: ReactNode;
};

const Banner = ({ children }: Props) => {
  return (
    <div id='banner' className='banner'>
      <h1 className='w-full px-[10%] text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
        {children}
      </h1>
      <Flags />
    </div>
  );
};

export default Banner;
