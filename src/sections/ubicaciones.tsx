import { Tab } from '@headlessui/react';
import MexicoMap from '@/src/assets/maps/mexico-map.png';
import USAMap from '@/src/assets/maps/usa-map.png';
import CanadaMap from '@/src/assets/maps/canada-map.png';
import Image from 'next/image';

const Ubicaciones = () => {
  return (
    <section id='ubicaciones' className=' min-h-[210px]'>
      <h2>Ubicaciones</h2>
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
        <Tab.Panels className='!mb-10'>
          <Tab.Panel>
            <Image
              src={MexicoMap}
              alt='Mexico locations'
              width={983}
              height={650}
              className='mx-auto min-h-[170px] w-full lg:min-h-[466px] 2xl:w-4/5'
              priority
              loading='eager'
            />
          </Tab.Panel>
          <Tab.Panel>
            <Image
              src={USAMap}
              alt='USA locations'
              width={983}
              height={650}
              className='mx-auto min-h-[170px] w-full lg:min-h-[466px] 2xl:w-4/5'
              priority
              loading='eager'
            />
          </Tab.Panel>
          <Tab.Panel>
            <Image
              src={CanadaMap}
              alt='Canada locations'
              width={983}
              height={650}
              className='mx-auto min-h-[170px] w-full lg:min-h-[466px] 2xl:w-3/4'
              priority
              loading='eager'
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Ubicaciones;
