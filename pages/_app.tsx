import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';

config.autoAddCss = false;

/* library.add(fas);
library.add(far);
library.add(fab); */

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div data-theme='mytheme'>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
