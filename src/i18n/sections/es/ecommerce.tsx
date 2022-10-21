import Link from 'next/link';

const Ecommerce = () => {
  return (
    <section id='ecommerce' className='ecommerce-separator usa-ecommerce'>
      <h2 className='text-base font-normal uppercase text-white lg:text-2xl 2xl:text-3xl'>
        <strong>Conoce nuestro</strong> servicio
        <br className='lg:hidden' />
        para <strong>Estados Unidos</strong>
      </h2>
      <Link href='/' locale='en'>
        <a className='btn glass px-7'>Ver más</a>
      </Link>
    </section>
  );
};

export default Ecommerce;
