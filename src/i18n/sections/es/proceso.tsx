import { StepContainer } from '@/src/components';
import { useMemo } from 'react';

const Proceso = () => {
  const steps = useMemo(
    () => [
      'Realiza tus compras en USA y China online con tu proveedor o en páginas reconocidas',
      'Asigna la dirección de nuestro almacén en Laredo, TX.',
      'Trabaja con tu asesor personal enviando tu comprobante de pago y número de rastreo.',
      'Una vez recibida la mercancía en nuestro almacén, nosotros haremos los trámites aduanales para cruzar a México.',
      'Ya que tu mercancía está en México, pagas tus honorarios e impuestos, y realizamos el envío directo a tu domicilio.',
      'Realizamos tu factura por servicios o por productos comercializados.',
    ],
    [],
  );

  return (
    <section id='proceso'>
      <h2>¿Cómo funciona?</h2>
      <StepContainer steps={steps} />
    </section>
  );
};

export default Proceso;
