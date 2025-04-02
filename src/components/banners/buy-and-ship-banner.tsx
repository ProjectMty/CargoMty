import Image from 'next/image';
import Link from 'next/link';

const BuyAndShipBanner = ({ withInfo = true }: { withInfo?: boolean }) => {
  return (
    <div className='wrap-buy-ship'>
      <Image
        src='/images/bg-buy-and-ship.png'
        alt='Background Buy And Shop'
        width={2560}
        height={1440}
        quality={100}
        priority
        sizes='(max-width: 1080px) 100vw, (max-width: 1440px) 75vw, (max-width: 2560px) 50vw, 33vw'
        className='w-full h-full object-cover'
      />

      <div className='flex flex-col items-center justify-center gap-12 px-4 py-8 text-center text-white'>
        <Image
          src='/images/logo-buy-and-ship.svg'
          alt='logo Buy And Shop'
          width={512}
          height={512}
          quality={100}
          priority
          sizes='(max-width: 1080px) 100vw, (max-width: 2560px) 50vw, 33vw'
          className='w-52 md:w-80 xl:w-[512px]'
        />
        {withInfo && (
          <>
            <p className='max-w-4xl text-lg md:text-xl xl:text-2xl'>
              ¿Quieres surtir tu negocio con mercancía que te ofrecen en otro
              país y no sabes cómo comprarla y traerla a México?
            </p>
            <h2>¡Cargo Monterrey es la solución!</h2>

            <Link
              href='/buy-and-ship'
              className='btn bg-white text-xl text-black hover:text-white'
            >
              Conocer más
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default BuyAndShipBanner;
