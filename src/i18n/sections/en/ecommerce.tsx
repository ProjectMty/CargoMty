import Link from 'next/link';

const Ecommerce = () => {
  return (
    <section
      id='service-for-mexico'
      className='ecommerce-separator mexico-cargo'
    >
      <h2 className='text-base font-normal uppercase text-white lg:text-2xl 2xl:text-3xl'>
        <strong>Get to know</strong> our service
        <br />
        for <strong>Mexico</strong>
      </h2>
      <Link href='/' locale='es'>
        <a className='btn glass px-7'>Find out more</a>
      </Link>
    </section>
  );
};

export default Ecommerce;
