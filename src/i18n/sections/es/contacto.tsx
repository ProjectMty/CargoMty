/* eslint-disable jsx-a11y/label-has-associated-control */
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faMapMarked,
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
      <div className='relative flex h-[3rem] min-h-[3rem] w-[3rem] min-w-[3rem] items-center justify-center rounded-full bg-secondary text-center text-2xl font-semibold text-white'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='text-left text-sm font-normal text-white'>{children}</div>
    </div>
  );
};

const Contacto = () => {
  return (
    <section id='contacto'>
      <h2>Contáctanos</h2>
      <div className='space-y-6 rounded-2xl bg-[#21165FB2] p-8'>
        <h3>¡Empieza a importar ya!</h3>
        <div className='space-y-6'>
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
        className='space-y-2 rounded-2xl bg-[#21165F] p-8'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className='group form-control w-full max-w-xs'>
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
            className='input input-bordered w-full max-w-xs text-black  placeholder:text-gray-400 group-focus-within:input-secondary'
          />
        </div>
        <div className='group form-control w-full max-w-xs'>
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
            className='input input-bordered w-full max-w-xs text-black  placeholder:text-gray-400 group-focus-within:input-secondary'
          />
        </div>
        <div className='group form-control w-full max-w-xs'>
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
            className='input input-bordered w-full max-w-xs text-black  placeholder:text-gray-400 group-focus-within:input-secondary'
          />
        </div>
        <div className='group form-control w-full max-w-xs'>
          <label className='label' htmlFor='subject'>
            <span className='label-text text-white focus:text-secondary group-focus-within:text-secondary'>
              Asunto
            </span>
          </label>
          <textarea
            id='subject'
            name='subject'
            placeholder='¿Cómo te podemos ayudar?'
            className='input input-bordered min-h-16 h-36 max-h-48 w-full max-w-xs resize-y pt-2 text-black placeholder:text-gray-400 group-focus-within:input-secondary'
          />
        </div>
        <div className='h-3' />
        <button
          type='submit'
          className='btn btn-secondary btn-block py-0 text-white'
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
