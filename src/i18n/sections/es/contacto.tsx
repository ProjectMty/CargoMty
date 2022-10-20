/* eslint-disable jsx-a11y/label-has-associated-control */
import { ContactForm } from '@/src/components';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

const Icon = ({
  icon,
  children,
}: {
  icon: IconDefinition;
  children: ReactNode;
}) => {
  return (
    <div className='flex w-full flex-row items-center justify-start gap-5'>
      <div
        className='relative flex h-[3rem] min-h-[3rem] w-[3rem] min-w-[3rem] items-center justify-center rounded-full bg-secondary text-center text-2xl font-semibold text-white

      lg:h-[4rem]
      lg:min-h-[4rem]
      lg:w-[4rem]
      lg:min-w-[4rem]
      lg:text-3xl
      '
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='text-left text-sm font-normal text-white lg:text-base'>
        {children}
      </div>
    </div>
  );
};

const Contacto = () => {
  return (
    <section id='contacto' className='section-full mt-8'>
      <h2>Contáctanos</h2>
      <ContactForm
        title='¡Empieza a importar ya!!'
        location='Lázaro Cárdenas 999 Local 2, Col. Las Brisas, 64780, Monterrey,
          Nuevo León'
        phone='81 2090 3977'
        email='info@cargomty.com'
        whatsapp={['+52 81 1669 1037', '+52 81 1636 0589']}
        btnMessage='Enviar'
        nameInput={{ label: 'Nombre', placeholder: 'Nombre' }}
        phoneInput={{ label: 'Teléfono', placeholder: 'Teléfono' }}
        emailInput={{ label: 'Email', placeholder: 'Email' }}
        subjectInput={{
          label: 'Asunto',
          placeholder: '¿Cómo te podemos ayudar?',
        }}
      />
    </section>
  );
};

export default Contacto;
