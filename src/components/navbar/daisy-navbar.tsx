import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import CargoMtyLogo from '@/src/assets/logo-cargomty.webp';
import clsx from 'clsx';
import Link from 'next/link';

const DaisyNavbar = ({
  toggleDrawer,
  title = 'Cargo Monterrey Logo',
  hideButton = false,
}: {
  toggleDrawer: () => void;
  title?: string;
  hideButton?: boolean;
}) => {
  return (
    <nav className='navbar sticky top-0 z-[200] bg-base-100 shadow-xl'>
      <div className='flex-1'>
        <Link href='/'>
          <Image
            width={1079}
            height={270}
            src={CargoMtyLogo}
            alt={title}
            className='w-40 bg-gray-500'
            priority
          />
        </Link>
      </div>
      <div className='flex-none'>
        <button
          type='button'
          className={clsx('btn btn-circle btn-ghost', hideButton && 'hidden')}
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
