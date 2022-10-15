import { FaIcon } from '../fa-icon';

const DaisyNavbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl normal-case'>Cargo Monterrey</a>
      </div>
      <div className='flex-none'>
        <button type='button' className='btn btn-ghost btn-square'>
          <FaIcon lookup={['fas', 'bars']} size='xl' />
        </button>
      </div>
    </div>
  );
};

export default DaisyNavbar;
