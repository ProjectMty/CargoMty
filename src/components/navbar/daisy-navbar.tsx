import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/future/image';
import CargoMtyLogo from '@/src/assets/logo-cargomty.webp';

const DaisyNavbar = ({
  toggleDrawer,
  title = 'Cargo Monterrey',
}: {
  toggleDrawer: () => void;
  title?: string;
}) => {
  return (
    <nav className='navbar sticky top-0 z-50 bg-base-100 shadow-xl'>
      <div className='flex-1'>
        {/* <span className='text-xl font-semibold normal-case'>{title}</span> */}
        <Image
          width={1079}
          height={270}
          src={CargoMtyLogo}
          alt='Cargo Monterrey Logo'
          className='w-40 bg-gray-500'
          priority
        />
      </div>
      <div className='flex-none'>
        <button
          type='button'
          className='btn btn-ghost btn-circle'
          aria-label='open-menu'
          onClick={toggleDrawer}
        >
          <FontAwesomeIcon icon={faBars} size='xl' />
        </button>
      </div>
    </nav>
  );
};

export default DaisyNavbar;
