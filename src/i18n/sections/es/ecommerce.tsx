import Link from 'next/link';

const Ecommerce = () => {
  return (
    <section
      id='ecommerce'
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className='ecommerce-usa'
    >
      <h2 className='text-base font-normal uppercase text-white'>
        <strong>Conoce nuestro</strong> servicio
        <br />
        para <strong>Estados Unidos</strong>
      </h2>
      <Link href='#'>
        <a className='btn glass px-7'>Ver más</a>
      </Link>
    </section>
  );
};

export default Ecommerce;
