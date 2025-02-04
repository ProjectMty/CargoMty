import MenuItem from './menu-item';
import { MAIN_MENU_ITEMS } from './routes';

const DesktopMenu = () => {
  return (
    <div className='hidden h-10 text-lg text-white md:flex md:space-x-8 lg:text-xl'>
      {MAIN_MENU_ITEMS.map((item) => (
        <MenuItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default DesktopMenu;
