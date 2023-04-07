import * as fbq from '@/src/utils';
import { config } from '@fortawesome/fontawesome-svg-core';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'animate.css/animate.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'react-toastify/dist/ReactToastify.min.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <DefaultSeo
        title='Cargo Monterrey - Logística Aplicada'
        description='Todos los trámites son cumpliendo las normas de cada país en el que trabajamos. Damos certeza y aseguramos los pedidos que manejamos.'
        canonical='https://cargomty.com/'
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            name: 'keywords',
            content:
              'Cargo Monterrey Logística Aplicada, logística, compras online, México, USA, Canadá, China, Europa, Warehouse, PO BOX, Comercio, Importación, Exportación',
          },
          { name: 'author', content: 'Cargo Monterrey, Grayrids' },
        ]}
        openGraph={{
          site_name: 'cargomty',
          type: 'website',
          locale: 'es',
          url: 'https://cargomty.com/',
          images: [
            {
              url: 'https://cargomty.com/cargomty-og.jpg',
              width: 870,
              height: 365,
              alt: 'Og Image Alt',
              type: 'image/jpg',
            },
          ],
        }}
      />
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        scriptProps={{
          async: false, // optional, default to false,
          defer: true, // optional, default to false
          appendTo: 'head', // optional, default to "head", can be "head" or "body",
          nonce: undefined,
        }}
      >
        <div id='theme' data-theme='mytheme'>
          <Component {...pageProps} />
        </div>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default MyApp;
