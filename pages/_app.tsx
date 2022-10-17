import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

config.autoAddCss = false;

/* library.add(fas);
library.add(far);
library.add(fab); */

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div data-theme='mytheme'>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
