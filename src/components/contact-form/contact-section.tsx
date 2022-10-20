import { phoneStringToLink } from '@/src/utils';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ContactForm from './contact-form';
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

const ContactSection = ({
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
      <ContactForm
        btnMessage={btnMessage}
        nameInput={nameInput}
        phoneInput={phoneInput}
        emailInput={emailInput}
        subjectInput={subjectInput}
      />
    </div>
  );
};

export default ContactSection;
