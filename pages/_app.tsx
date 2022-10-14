import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

library.add(fas);
library.add(far);
library.add(fab);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div data-theme='mytheme'>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
