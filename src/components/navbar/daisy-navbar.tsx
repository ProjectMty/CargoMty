import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DaisyNavbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <span className='btn btn-ghost text-xl normal-case'>
          Cargo Monterrey
        </span>
      </div>
      <div className='flex-none'>
        <button
          type='button'
          className='btn btn-ghost btn-square'
          aria-label='open-menu'
        >
          <FontAwesomeIcon icon={faBars} size='xl' />
        </button>
      </div>
    </div>
  );
};

export default DaisyNavbar;
