import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ServiceItemProps = {
  icon: IconDefinition;
  title: string;
  text?: string;
};

const ServiceItem = ({ icon, title, text }: ServiceItemProps) => {
  return (
    <div className='flex w-full max-w-md items-center justify-start space-x-4 text-primary lg:space-x-6'>
      <div className='flex min-w-[64px] items-center justify-center text-center text-5xl'>
        <FontAwesomeIcon icon={icon} className='text-5xl' />
      </div>
      <div>
        <h4 className='text-base font-bold sm:text-lg md:text-xl '>{title}</h4>
        {text && (
          <p className='text-sm font-light sm:text-base md:text-lg '>{text}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
