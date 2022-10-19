import { Banner, DaisyNavbar } from '@/src/components';
import { Nosotros, Proceso, Servicios } from '@/src/i18n/sections/es';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo
        title='Cargo Monterrey'
        description='Cargo Monterrey es tu solución para todas tus compras e importaciones de USA y China.'
      />
      <DaisyNavbar />
      <Banner>
        Somos las <strong className='text-bold'>solución</strong> para
        <br />
        <strong className='text-bold'>todas</strong> tus compras
      </Banner>
      <Nosotros />

      <div className='services-separator lg:hidden' />

      <Servicios />
      <Proceso />
      <section id='tarifas' className='mt-8'>
        <h2>Tarifas</h2>
        <div className='flex min-h-[370px] w-full flex-col items-center justify-center space-y-5 rounded-2xl bg-[#21165F] px-5 py-4 text-center text-sm font-light text-white'>
          <div>
            <h2 className='font-bold uppercase'>Compras personales</h2>
            <p>Menores a $500 USD</p>
          </div>

          <div className='font-bold'>
            <p>$1 a$500 USD</p>
            <p>+ $82 USD Honorarios</p>
            <p>+ Envío a tu domicilio</p>
          </div>
          <p>
            Si la compra es menor a $500 USD, pero es mercancía repetitiva o
            para vender, adicional al servicio de honorario, se cobra el 16%
            IVA.
          </p>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>
        <div className='flex min-h-[370px] w-full flex-col items-center justify-center space-y-5 rounded-2xl bg-[#21165F] px-5 py-4 text-center text-sm font-light text-white'>
          <div>
            <h2 className='font-bold uppercase'>Compras personales</h2>
            <p>Mayores a $500 USD</p>
          </div>

          <div className='font-bold'>
            <p>$501 a 3,000 USD</p>
            <p>+ %18 USD Honorarios</p>
            <p>+ Envío a tu domicilio</p>
          </div>
          <p>
            Si la compra es mercancía repetitiva o para vender, adicional al
            servicio de honorario, se cobra el 16% IVA.
          </p>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>
        <div className='flex min-h-[370px] w-full flex-col items-center justify-center space-y-5 rounded-2xl bg-[#21165F] px-5 py-4 text-center text-sm font-light text-white'>
          <div>
            <h2 className='font-bold uppercase'>Empresariales</h2>
            <p>A partir de $100 USD</p>
          </div>

          <div className='font-bold'>
            <p>$100 USD a $3,000 USD</p>
            <p>en adelante</p>
          </div>
          <p>
            Compras empresariales o suministros para empresas comercializadoras
            cotizados según los artículos y sus aranceles.
          </p>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
