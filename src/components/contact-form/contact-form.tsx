import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import ContactIcon from './contact-icon';

type InputProps = {
  label: string;
  placeholder: string;
};

type Props = {
  title: string;
  btnMessage: string;
  nameInput: InputProps;
  phoneInput: InputProps;
  emailInput: InputProps;
  subjectInput: InputProps;
  location?: string;
  phone?: string;
  whatsapp?: string[];
  email?: string;
};

const ContactForm = ({
  title,
  btnMessage,
  nameInput,
  phoneInput,
  emailInput,
  subjectInput,
  location,
  phone,
  whatsapp,
  email,
}: Props) => {
  return (
    <div className='space-y-8 lg:flex lg:flex-row lg:space-y-0 lg:w-1/2'>
      <div className='space-y-6 rounded-2xl bg-[#21165FB2] p-8 lg:w-1/2 lg:rounded-r-none lg:bg-[#21165F]'>
        <h3 className='lg:text-3xl'>{title}</h3>
        <div className='space-y-6 lg:flex lg:flex-col lg:space-y-10 lg:px-6'>
          {location && (
            <ContactIcon icon={faLocationDot}>
              <p>{location}</p>
            </ContactIcon>
          )}
          {phone && (
            <ContactIcon icon={faPhone}>
              <p>{phone}</p>
            </ContactIcon>
          )}
          {whatsapp && (
            <ContactIcon icon={faWhatsapp}>
              {whatsapp.map((tel) => (
                <p key={tel}>{tel}</p>
              ))}
            </ContactIcon>
          )}
          {email && (
            <ContactIcon icon={faEnvelope}>
              <p>{email}</p>
            </ContactIcon>
          )}
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
              {nameInput.label}
            </span>
          </label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder={nameInput.placeholder}
            className='input input-bordered w-full text-black  placeholder:text-gray-400 group-focus-within:input-secondary'
          />
        </div>
        <div className='group form-control w-full '>
          <label className='label' htmlFor='phone'>
            <span className='label-text text-white focus:text-secondary group-focus-within:text-secondary'>
              {phoneInput.label}
            </span>
          </label>
          <input
            id='phone'
            name='phone'
            type='text'
            placeholder={phoneInput.placeholder}
            className='input input-bordered w-full text-black  placeholder:text-gray-400 group-focus-within:input-secondary'
          />
        </div>
        <div className='group form-control w-full '>
          <label className='label' htmlFor='email'>
            <span className='label-text text-white focus:text-secondary group-focus-within:text-secondary'>
              {emailInput.label}
            </span>
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder={emailInput.placeholder}
            className='input input-bordered w-full text-black  placeholder:text-gray-400 group-focus-within:input-secondary'
          />
        </div>
        <div className='group form-control w-full '>
          <label className='label' htmlFor='subject'>
            <span className='label-text text-white focus:text-secondary group-focus-within:text-secondary'>
              {subjectInput.label}
            </span>
          </label>
          <textarea
            id='subject'
            name='subject'
            placeholder={subjectInput.placeholder}
            className='textarea textarea-bordered min-h-16 h-36 max-h-48 w-full resize-y text-black placeholder:text-gray-400 group-focus-within:textarea-secondary'
          />
        </div>
        <div className='h-3' />
        <button
          type='submit'
          className='btn btn-secondary btn-block py-0 text-white lg:w-56'
        >
          {btnMessage}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
