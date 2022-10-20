import { WeightLbs } from '@/src/components';

const Costs = () => {
  return (
    <section id='costs' className='bg-[#21165F] text-white'>
      <h2 className='mt-6'>What does it cost?</h2>
      <div className='w-[90%] space-y-10 rounded-2xl bg-white px-10 py-8 text-sm font-light text-primary shadow-lg'>
        <div>
          <h3 className='text-base font-bold'>Service fees</h3>
          <p>8.5% of sales price or $.50 per unit , whichever is higher</p>
        </div>
        <div>
          <h3 className='text-base font-bold'>Tariff and custom fees</h3>
          <p>16% of sales price</p>
        </div>
        <div>
          <h3 className='text-base font-bold'>Shipping fees</h3>
          <p>$295 USD per 4' x 4' x 4' pallet up to 500 lbs</p>
        </div>
      </div>
      <p className='text-justify font-light'>
        This is from Texas to any Amazon FBA warehouse or Mercado Libre center
        in Mexico. (note* : does not include shipping from your warehouse to our
        warehouse in Laredo, TX. If you are shipping boxes, not pallets)
      </p>
      <WeightLbs />
      <p className='text-justify font-light'>
        For FBM, DTC, or sales delivered directly to your buyer's door, we
        charge $12 per package to cross the border plus shipping based on weight
        and dimensions of each package and the destination zip code in Mexico.
        We will provide you with a pricing chart for each size range and zip
        code.
      </p>
    </section>
  );
};

export default Costs;
