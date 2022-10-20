import { phoneStringToLink } from '@/src/utils';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
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
  location?: { label: string; link: string };
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
    <div className='space-y-8 lg:flex lg:w-3/4 lg:flex-row lg:space-y-0 xl:w-2/3'>
      <div className='space-y-6 rounded-2xl bg-[#21165FB2] p-8 lg:w-2/3 lg:rounded-r-none lg:bg-[#21165F] xl:w-1/2'>
        <h3 className='lg:text-3xl'>{title}</h3>
        <div className='space-y-6 lg:flex lg:flex-col lg:space-y-10 lg:px-6'>
          {location && (
            <ContactIcon icon={faLocationDot}>
              <Link href={location.link}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block hover:underline'
                >
                  {location.label}
                </a>
              </Link>
            </ContactIcon>
          )}
          {phone && (
            <ContactIcon icon={faPhone}>
              <Link href={`tel:+${phoneStringToLink(phone)}`}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block hover:underline'
                >
                  {phone}
                </a>
              </Link>
            </ContactIcon>
          )}
          {whatsapp && (
            <ContactIcon icon={faWhatsapp}>
              {whatsapp.map((tel) => (
                <Link
                  key={tel}
                  href={`https://wa.me/${phoneStringToLink(tel)}`}
                >
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block hover:underline'
                  >
                    {tel}
                  </a>
                </Link>
              ))}
            </ContactIcon>
          )}
          {email && (
            <ContactIcon icon={faEnvelope}>
              <Link href={`mailto:${email}`}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block break-all hover:underline'
                >
                  {email}
                </a>
              </Link>
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
