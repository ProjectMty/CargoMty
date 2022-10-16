import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DaisyNavbar = ({ title = 'Cargo Monterrey' }: { title?: string }) => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <span className='text-xl font-semibold normal-case'>{title}</span>
      </div>
      <div className='flex-none'>
        <button
          type='button'
          className='btn btn-ghost btn-circle'
          aria-label='open-menu'
        >
          <FontAwesomeIcon icon={faBars} size='xl' />
        </button>
      </div>
    </div>
  );
};

export default DaisyNavbar;
