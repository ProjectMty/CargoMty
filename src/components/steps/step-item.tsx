import { useMediaQuery } from '@/src/hooks';
import clsx from 'clsx';
import React from 'react';

const StepItem = ({
  step,
  steps,
  title,
}: {
  step: number;
  steps: number;
  title: React.ReactNode;
}) => {
  const isLg = useMediaQuery('(min-width: 1023px)');
  const showDots = isLg && step % 3 !== 0 && step !== steps;
  const color = step % 2 === 0 ? 'bg-primary' : 'bg-secondary';

  return (
    <div className='flex w-full flex-row items-center justify-start gap-5 lg:flex-col'>
      <div
        className={clsx(
          'min-h-12 relative flex h-12 w-12 min-w-[3rem] items-center justify-center rounded-full text-center text-2xl font-semibold text-white lg:h-24 lg:min-h-24 lg:w-24 lg:min-w-[6rem] lg:text-4xl',
          color,
        )}
      >
        {step}
        {showDots && (
          <div className='min-h-8 absolute top-full z-[100] translate-y-[16px] space-y-3 md:translate-y-[10px] lg:left-full lg:top-1/3 lg:flex lg:min-h-0 lg:min-w-8 lg:translate-x-[50px] lg:space-x-3 lg:space-y-0 xl:translate-x-[72px] 2xl:translate-x-[114px]'>
            <div
              className={clsx(
                'h-[6px] min-h-[6px] w-[6px] min-w-[6px] rounded-full lg:h-[12px] lg:min-h-[12px] lg:w-[12px] lg:min-w-[12px]',
                color,
              )}
            />
            <div
              className={clsx(
                'h-[6px] min-h-[6px] w-[6px] min-w-[6px] rounded-full lg:h-[12px] lg:min-h-[12px] lg:w-[12px] lg:min-w-[12px]',
                color,
              )}
            />
            <div
              className={clsx(
                'h-[6px] min-h-[6px] w-[6px] min-w-[6px] rounded-full lg:h-[12px] lg:min-h-[12px] lg:w-[12px] lg:min-w-[12px]',
                color,
              )}
            />
          </div>
        )}
      </div>
      <p className='text-left text-lg font-normal text-black lg:text-center'>
        {title}
      </p>
    </div>
  );
};

export default StepItem;
