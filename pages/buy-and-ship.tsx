import IconVerify from '@/src/assets/icons/verify.svg';
import IconSearch from '@/src/assets/icons/search.svg';
import IconManagement from '@/src/assets/icons/management.svg';
import IconPayment from '@/src/assets/icons/payment.svg';
import IconLogistics from '@/src/assets/icons/logistics.svg';
import IconStorage from '@/src/assets/icons/storage.svg';
import IconEcommerce from '@/src/assets/icons/ecommerce.svg';
import { Drawer, Footer, StepContainer } from '@/src/components';
import BuyAndShipBanner from '@/src/components/banners/buy-and-ship-banner';
import { BAS_MENU_ITEMS } from '@/src/components/navbar/routes';
import { Contacto } from '@/src/sections';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const servicesList = [
  {
    id: 1,
    src: IconVerify,
    title: 'Verificación de Proveedor',
    text: 'Podemos realizar visita a fábricas y oficinas para asegurarnos que sí existe',
  },
  {
    id: 2,
    src: IconSearch,
    title: ' Buscador de Productos',
    text: 'Tú nos indicas lo que necesitas, y nosotros buscamos opciones para presentarte tres cotizaciones diferentes.',
  },
  {
    id: 3,
    src: IconManagement,
    title: 'Gestión de Muestras',
    text: 'Una vez que elijas el producto y el proveedor de tu preferencia, nosotros nos encargamos de gestionar la solicitud y el envío de muestras',
  },
  {
    id: 4,
    src: IconPayment,
    title: 'Pagos al Extranjero',
    text: 'Realizamos los pagos a tus proveedores en el extranjero.',
  },
  {
    id: 5,
    src: IconLogistics,
    title: 'Logística Internacional',
    text: '¡Despreocúpate! Nosotros nos encargamos de toda la comunicación entre tu proveedor y los puertos. Gestionamos todos los pagos necesarios para la importación de tus productos. Y, finalmente, nos aseguramos de que tus productos lleguen directamente a la puerta de tu negocio en México.',
  },
  {
    id: 6,
    src: IconStorage,
    title: 'Almacenamiento',
    text: 'Si no cuentas con el espacio suficiente para almacenar toda tu mercancía, nosotros te ofrecemos un espacio limpio y seguro para tu inventario excedente. Podemos almacenar tanto cajas como tarimas.',
  },
  {
    id: 7,
    src: IconEcommerce,
    title: 'E-commerce Fulfillment',
    text: '¿Vendes online y realizas envíos a tus clientes en México? Deja que nuestro equipo 3PL se encargue de surtir tus órdenes y enviar tus pedidos.',
  },
  {
    id: 8,
    src: IconStorage,
    title: 'Retornos y Devoluciones',
    text: 'Si vendes online y recibes devoluciones de tus clientes, o tu requieres devolver los productos con tus proveedores, cuenta con nuestro servicio de devoluciones y retornos nacionales e internacionales.',
  },
];

const steps = [
  <>
    Contáctanos por WhatsApp al <strong>81-1588-4871</strong>, llama al
    <strong>81-1669-1037</strong> o escribe a <strong>info@cargomty.com</strong>{' '}
    para solicitar tu cotización
  </>,
  <>
    <strong>Cotizamos tus necesidades</strong>, desde la{' '}
    <strong>negociación</strong> con tu <strong>proveedor</strong> hasta la
    entrega en tu negocio en <strong>México</strong>.
  </>,
  <>
    <strong>Negociamos con tu proveedor</strong> y te enviamos la cotización
    completa, incluyendo tipo de cambio.
  </>,
  <>
    <strong>Realiza el pago</strong> a nuestras cuentas en México.
  </>,
  <>
    <strong>Nosotros pagamos a tu proveedor</strong> en el extranjero
  </>,
  <>
    <strong>Gestionamos toda la logística</strong>, desde el país de origen
    hasta México.
  </>,
  <>
    <strong> Te mantenemos informado</strong> del estatus de tu compra,
    incluyendo importación y envío.
  </>,
  <>
    <strong>Facturamos tu compra</strong> en México
  </>,
  <>
    <strong>Entregamos tu mercancía</strong> directamente en la puerta de tu
    negocio.
  </>,
];

const ServiceItem = ({
  src,
  title,
  text,
}: {
  src: string | StaticImport;
  title: string;
  text: string;
}) => {
  return (
    <div className='mx-auto flex w-full flex-col items-center justify-start gap-4 lg:flex-row lg:gap-6'>
      <div className='h-28 max-h-[112px] min-h-[112px] w-28 min-w-[112px] max-w-[112px]'>
        <Image
          src={src}
          alt={title}
          width={112}
          height={112}
          className='h-28 w-28'
        />
      </div>
      <div className='space-y-2 text-center text-white md:text-left'>
        <h4 className='text-xl font-bold md:text-2xl xl:text-3xl'>{title}</h4>
        <p className='text-lg font-light md:text-xl xl:text-2xl'>{text}</p>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <NextSeo />
      <Drawer items={BAS_MENU_ITEMS} navbarLogo='Cargo Monterrey'>
        <BuyAndShipBanner withInfo={false} />
        <section id='info'>
          <h1>
            Servicio de Compras, Comercialización y Pago a Proveedores
            Internacionales
          </h1>
          <p className='max-w-4xl text-lg md:text-xl xl:text-2xl'>
            ¿Quieres surtir tu negocio con mercancía que te ofrecen en otro país
            y no sabes cómo comprarla y traerla a México?
          </p>
          <h2>¡Cargo Monterrey es la solución!</h2>
          <p>
            Con el servicio <strong>Buy & Ship</strong> de{' '}
            <strong>Cargo Monterrey</strong>, puedes comprar en cualquier parte
            del mundo y recibirlo aquí en México.
          </p>
        </section>

        <div className='services-separator lg:hidden' />

        <div
          id='servicios'
          className='space-y-8 bg-[#006aaf] px-4 py-16 text-white xl:px-52'
        >
          <h2 className='text-center'>Nuestros Servicios:</h2>
          <div className='space-y-12 rounded-2xl bg-[#103654] px-16 py-12'>
            {servicesList.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </div>
        </div>
        <section id='pasos'>
          <h2>
            ¡Sigue estos pasos <br /> para comprar hoy!
          </h2>
          <StepContainer steps={steps} />
        </section>
        <Contacto />
        <Footer />
      </Drawer>
    </>
  );
};

export default Home;
