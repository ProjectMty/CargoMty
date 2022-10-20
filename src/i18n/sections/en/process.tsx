import { StepContainer } from '@/src/components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { useMemo } from 'react';

const Process = () => {
  const steps = useMemo(
    () => [
      'Create your sales plan to decide what products you will be sending to Amazon FBA, Mercado Libre Full, or direct to client.',

      'Complete intake sheet (Cargo Monterrey document) and email it along with your commercial invoice.',

      'We will quote your shipment to include all tariffs, service fees, and shipping from Laredo, TX to Mexico.',

      'Ship your merchandise to our warehouse in Laredo, TX. All products and master cartons must beproperly labeled with product (FNSKU) and carton labels.',

      'Upon receiving your merchandise, we will send you confirmation of receipt, pictures of the pallets asthey arrived, and confirm your original quote. Your quote will only change if the merchandisereceived is in any way different than what was listed on your intake sheet.',

      'Payment is due upon quote confirmation.',

      'We will import merchandise into Mexico as the importer of record.',

      'Upon receipt of merchandise in Mexico, we will email you confirmation of import and pictures ofpallets as they arrived in Mexico',

      `We transport the merchandise to the distribution center designated by Amazon or Mercado Libre or direct to your buyer's door.`,

      'Upon completion of delivery, we will email you all document and confirmations from delivery.',

      'We will issue all facturas requested by buyers on Amazon or Mercado Libre website. A factura is the documentissued by a Mexican company to the buyer to make their purchase tax deductible. This is all donewith an automated system linked to your seller platform without added work for you!',
    ],
    [],
  );

  return (
    <section id='process'>
      <h2>How does It works?</h2>
      <StepContainer steps={steps} />
      <div className='max-w-[276px]'>
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={clsx(
                  'flex w-full items-center justify-between rounded-lg bg-primary bg-[#3926AE40] px-4 py-2 text-left text-sm font-normal text-primary focus:outline-none',
                  open && 'bg-[#3826aeff] text-white',
                )}
              >
                <span>How long does the process take?</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={clsx(
                    'text-primary',
                    open && 'rotate-180 text-white',
                  )}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-justify text-sm'>
                The import and transport process takes 7-10 business days from
                the day we receive your merchandise at ourwarehouse in Texas. We
                will deliver to the designated distribution center 7-10 business
                days after wereceive your merchandise in Laredo. However, we
                depend on distribution center availability fordelivery
                appointments.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={clsx(
                  'flex w-full items-center justify-between rounded-lg bg-primary bg-[#3926AE40] px-4 py-2 text-left text-sm font-normal text-primary focus:outline-none',
                  open && 'bg-[#3826aeff] text-white',
                )}
              >
                <span>How is my merchandise protected?</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={clsx(
                    'text-primary',
                    open && 'rotate-180 text-white',
                  )}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-justify text-sm'>
                Your merchandise is safe with us. We offer you a 100% product
                cost insurance policy on every shipment.From the moment your
                merchandise arrives at our warehouse in Texas until it arrives
                at the Amazon or Mercado Librecenter, we insure your product at
                100% of the cost you declared on the intake sheet. We cover any
                losses,thefts, or damages incurred while the merchandise was in
                our custody. Further, the shipper must be able toprove that
                item(s) was on pallet and in good condition upon arrival at our
                warehouse. We do not cover anymerchandise confiscated by customs
                or local authorities due to the item's illegality.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={clsx(
                  'flex w-full items-center justify-between rounded-lg bg-primary bg-[#3926AE40] px-4 py-2 text-left text-sm font-normal text-primary focus:outline-none',
                  open && 'bg-[#3826aeff] text-white',
                )}
              >
                <span>How does returns processing work?</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={clsx(
                    'text-primary',
                    open && 'rotate-180 text-white',
                  )}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-justify text-sm'>
                Our reverse logistics work just as seamlessly as our Southbound
                operations! Have your returns shipped from your buyer or from
                Amazon or Mercado Libre's warehouse to our warehouse here in
                Monterrey, Mexico. From here, we will move the package to our
                warehouse in Texas. From here, we use your shipping label to
                return themerchandise to you in the US. We charge you $1.50 per
                returned item.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
};

export default Process;
