import { Tab } from '@headlessui/react';
import MexicoMap from '@/src/assets/maps/mexico-map.png';
import Image from 'next/future/image';

const Ubicaciones = () => {
  return (
    <section id='ubicaciones' className='mt-5 min-h-[210px]'>
      <h2>Nuestras ubicaciones</h2>
      <Tab.Group>
        <Tab.List className='space-x-6 text-base font-light text-primary sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl'>
          <Tab className='decoration-2 underline-offset-2 outline-none duration-150 ui-selected:font-bold ui-selected:underline'>
            México
          </Tab>
          <Tab className='decoration-2 underline-offset-2 outline-none duration-150 ui-selected:font-bold ui-selected:underline'>
            USA
          </Tab>
          <Tab className='decoration-2 underline-offset-2 outline-none duration-150 ui-selected:font-bold ui-selected:underline'>
            Canadá
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Image
              src={MexicoMap}
              alt='Mexico locations map'
              width={983}
              height={650}
              className='w-full'
            />
          </Tab.Panel>
          <Tab.Panel>
            <Image
              src={MexicoMap}
              alt='USA locations map'
              width={983}
              height={650}
              className='w-full'
            />
          </Tab.Panel>
          <Tab.Panel>
            <Image
              src={MexicoMap}
              alt='Canada locations map'
              width={983}
              height={650}
              className='w-full'
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Ubicaciones;
