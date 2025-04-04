import { DaisyNavbar, Footer } from '@/src/components';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='flex h-screen flex-col bg-primary'>
      <DaisyNavbar toggleDrawer={() => {}} hideButton />
      <div className='flex grow-[1] items-center justify-center'>
        <div className='flex w-11/12 flex-col items-center justify-center space-y-4 rounded-xl bg-white px-4 py-8 text-center shadow-xl sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 2xl:w-1/3'>
          <h1 className='text-2xl uppercase lg:text-4xl'>
            Gracias de parte de{' '}
            <span className='block text-primary'>Cargo Monterrey</span>
          </h1>
          <p className='text-base lg:text-lg'>
            Estaremos en contacto en breve.
          </p>
          <p className='text-base lg:text-lg'>
            ¡Sus datos están a salvo con nosotros!
          </p>
          <Link href='/' className='btn btn-primary text-white'>
            Regresar a inicio
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
