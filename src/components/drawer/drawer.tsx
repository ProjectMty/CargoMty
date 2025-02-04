/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { DaisyNavbar } from '../navbar';
import { MAIN_MENU_ITEMS } from '../navbar/routes';

type Props = {
  navbarLogo: string;
  items: typeof MAIN_MENU_ITEMS;
  children: ReactNode;
};

const Drawer = ({ navbarLogo, items, children }: Props) => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer((s) => !s);
  };

  return (
    <div className='drawer drawer-end'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
        checked={drawer}
        onChange={toggleDrawer}
      />
      <div className='drawer-content'>
        <DaisyNavbar toggleDrawer={toggleDrawer} title={navbarLogo} />
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay' />
        <ul className='menu w-80 overflow-y-auto bg-base-100 p-4'>
          {items.map(({ title, href, link }) => (
            <li key={href} onClick={toggleDrawer}>
              <Link href={`${link ? '/' : '#'}${href}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
