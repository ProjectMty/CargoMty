import Image from 'next/future/image';
import MexicoFlag from '@/src/assets/flags/mexico.png';
import CanadaFlag from '@/src/assets/flags/canada.png';
import UsFlag from '@/src/assets/flags/united-states.png';

const flags = [
  { flag: 'mexico', image: MexicoFlag },
  { flag: 'canada', image: CanadaFlag },
  { flag: 'united-states', image: UsFlag },
];

const Banner = () => {
  return (
    <section id='banner' className='banner'>
      <h1 className='w-full px-[10%] text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
        <span className='block'>
          Somos las <strong className='text-bold'>solución</strong> para
        </span>
        <strong className='text-bold'>todas</strong> tus compras
      </h1>
      <div className='flex space-x-4 lg:space-x-6'>
        {flags.map(({ flag, image }) => (
          <Image
            key={flag}
            src={image}
            alt={`${flag} flag`}
            className='w-[24px] rounded-full brightness-95 contrast-110 sm:w-[34px] md:w-[42px] lg:w-[50px] xl:w-[58px] 2xl:w-[70px]'
            width={512}
            height={512}
            priority
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
