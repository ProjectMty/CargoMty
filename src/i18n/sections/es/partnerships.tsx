import { Carousel } from 'react-responsive-carousel';
import EnviaLogo from '@/src/assets/partnership/envia-com.png';
import FedexLogo from '@/src/assets/partnership/fedex.png';
import MercadoLibreLogo from '@/src/assets/partnership/mercadolibre.png';
import TeikerLogo from '@/src/assets/partnership/teiker.png';
import TresGuerrasLogo from '@/src/assets/partnership/tres-guerras.png';
import Image from 'next/future/image';
import Link from 'next/link';
import { useMediaQuery } from '@/src/hooks';

const Partnerships = () => {
  const isLg = useMediaQuery('(min-width: 1023px)');

  return (
    <section id='partnerships' className='mt-8'>
      <h2>Nuestro partnerships</h2>
      <Carousel
        className='w-full'
        centerMode={isLg}
        centerSlidePercentage={16.66}
        emulateTouch={!isLg}
        infiniteLoop={!isLg}
        showArrows={!isLg}
        swipeable={!isLg}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderItem={(item) => (
          <div className='flex h-full w-full items-center justify-center px-4'>
            {item}
          </div>
        )}
      >
        <div className='grayscale duration-200 hover:grayscale-0'>
          <Link href='https://envia.com'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <Image
                src={EnviaLogo}
                alt='Envia Logo'
                width={475}
                height={106}
                className='w-full'
              />
            </a>
          </Link>
        </div>
        <div className='w-72 grayscale duration-200 hover:grayscale-0'>
          <Link href='https://mercadolibre.com'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <Image
                src={MercadoLibreLogo}
                alt='MercadoLibre Logo'
                width={800}
                height={600}
                className='w-full'
              />
            </a>
          </Link>
        </div>
        <div className='w-60 grayscale duration-200 hover:grayscale-0'>
          <Link href='https://fedex.com'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <Image
                src={FedexLogo}
                alt='Fedex Logo'
                width={800}
                height={600}
                className='w-full'
              />
            </a>
          </Link>
        </div>
        <div className='w-64 grayscale duration-200 hover:grayscale-0'>
          <Link href='https://teiker.mx/'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <Image
                src={TeikerLogo}
                alt='Teiker Logo'
                width={800}
                height={600}
                className='w-full'
              />
            </a>
          </Link>
        </div>
        <div className='w-64 grayscale duration-200 hover:grayscale-0'>
          <Link href='https://www.tresguerras.com.mx/'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <Image
                src={TresGuerrasLogo}
                alt='TresGuerras Logo'
                width={800}
                height={600}
                className='w-full'
              />
            </a>
          </Link>
        </div>
      </Carousel>
    </section>
  );
};

export default Partnerships;
