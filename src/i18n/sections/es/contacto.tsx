/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <div className='space-y-8 lg:flex lg:flex-row lg:space-y-0'>
        <div className='space-y-6 rounded-2xl bg-[#21165FB2] p-8 lg:w-1/2 lg:rounded-r-none lg:bg-[#21165F]'>
          <h3 className='lg:text-3xl'>¡Empieza a importar ya!</h3>
          <div className='space-y-6 lg:flex lg:flex-col lg:space-y-10 lg:px-6'>
            <Icon icon={faLocationDot}>
              <p>
                Lázaro Cárdenas 999 Local 2, Col. Las Brisas, 64780, Monterrey,
                Nuevo León
              </p>
            </Icon>
            <Icon icon={faPhone}>
              <p>81 2090 3977</p>
            </Icon>
            <Icon icon={faWhatsapp}>
              <p>+52 81 1669 1037</p>
              <p>+52 81 1636 0589</p>
            </Icon>
            <Icon icon={faEnvelope}>
              <p>info@cargomty.com</p>
            </Icon>
          </div>
        </div>
        <form
          className='space-y-2 rounded-2xl bg-[#21165F] p-8 lg:w-1/2 lg:rounded-l-none lg:bg-[#21165FB2]'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className='group form-control w-full '>
            <label className='label' htmlFor='name'>
              <span className='label-text text-white focus:text-secondary group-focus-within:text-secondary'>
                Nombre
              </span>
            </label>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Nombre'
              className='input input-bordered w-full text-black  placeholder:text-gray-400 group-focus-within:input-secondary'
            />
          </div>
          <div className='group form-control w-full '>
            <label className='label' htmlFor='phone'>
              <span className='label-text text-white focus:text-secondary group-focus-within:text-secondary'>
                Teléfono
              </span>
            </label>
            <input
              id='phone'
              name='phone'
              type='text'
              placeholder='Teléfono'
              className='input input-bordered w-full text-black  placeholder:text-gray-400 group-focus-within:input-secondary'
            />
          </div>
          <div className='group form-control w-full '>
            <label className='label' htmlFor='email'>
              <span className='label-text text-white focus:text-secondary group-focus-within:text-secondary'>
                Correo
              </span>
            </label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Correo'
              className='input input-bordered w-full text-black  placeholder:text-gray-400 group-focus-within:input-secondary'
            />
          </div>
          <div className='group form-control w-full '>
            <label className='label' htmlFor='subject'>
              <span className='label-text text-white focus:text-secondary group-focus-within:text-secondary'>
                Asunto
              </span>
            </label>
            <textarea
              id='subject'
              name='subject'
              placeholder='¿Cómo te podemos ayudar?'
              className='textarea textarea-bordered min-h-16 h-36 max-h-48 w-full resize-y text-black placeholder:text-gray-400 group-focus-within:textarea-secondary'
            />
          </div>
          <div className='h-3' />
          <button
            type='submit'
            className='btn btn-secondary btn-block py-0 text-white lg:w-56'
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
