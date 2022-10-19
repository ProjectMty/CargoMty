import servicesBoxImage from '@/src/assets/services-box.webp';
import {
  DesktopServices,
  MobileServices,
  spanishServicesList,
} from '@/src/components';
import { useMediaQuery } from '@/src/hooks';
import Image from 'next/future/image';

const Servicios = () => {
  const isLg = useMediaQuery('(max-width: 1023px)');

  return (
    <>
      <section
        id='servicios'
        className='text-primary lg:w-full lg:max-w-full lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-12 lg:bg-[#21165F] lg:text-white xl:space-x-24 2xl:space-x-24'
      >
        <h2 className='block lg:hidden'>Nuestros servicios</h2>
        <Image
          src={servicesBoxImage}
          alt='Sending Box with Cargo Monterrey'
          width={657}
          height={657}
          className='h-auto w-full max-w-[192px] rounded-full bg-gray-500 drop-shadow-2xl sm:max-w-[224px] lg:max-w-[288px] lg:scale-110 xl:scale-[1.4] 2xl:max-w-[416px] 2xl:scale-[1.3]'
        />
        <div className='responsive-block-space !mt-0 py-3 lg:max-w-[512px] xl:py-10 2xl:max-w-screen-md 2xl:py-16'>
          <h2 className='hidden lg:block lg:text-4xl 2xl:text-6xl'>
            Nuestros servicios
          </h2>
          <h3 className='font-bold lg:text-base lg:font-semibold 2xl:text-xl'>
            Cargo Monterrey te ofrece un servicio integral para todas tus
            importaciones de USA y China a México.
          </h3>
          <p className='font-light lg:text-base 2xl:text-xl'>
            Tú te encargas de comprar en USA, China, o cualquier parte del
            mundo, nosotros nos encargamos de entregarte aquí en México.
          </p>
        </div>
      </section>
      {isLg ? (
        <MobileServices servicesList={spanishServicesList} />
      ) : (
        <DesktopServices servicesList={spanishServicesList} />
      )}
    </>
  );
};

export default Servicios;
