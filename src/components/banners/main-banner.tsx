import { Flags } from '../flags';

const MainBanner = () => {
  return (
    <div id='banner' className='banner h-full xl:h-auto'>
      <h1 className='animate__animated animate__fadeInDown w-full px-[10%] text-lg  sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:px-72 2xl:text-7xl'>
        Somos la{' '}
        <strong className='text-bold'>
          solución para
          <br />
          todas
        </strong>{' '}
        tus compras
      </h1>
      <Flags />
    </div>
  );
};

export default MainBanner;
