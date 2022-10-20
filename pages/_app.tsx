import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Footer } from '@/src/components';

config.autoAddCss = false;

/* library.add(fas);
library.add(far);
library.add(fab); */

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='keywords'
          content='Cargo Monterrey Logística Aplicada, logística, compras online, México, USA, Canadá, China, Europa, Warehouse, PO BOX, Comercio, Importación, Exportación'
        />
        <meta name='author' content='Cargo Monterrey, Grayrids' />
      </Head>
      <div data-theme='mytheme'>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
