const Tarifas = () => {
  return (
    <section id='tarifas'>
      <h2>Tarifas</h2>
      <div className='flex flex-col items-center justify-center space-y-12 lg:flex-row lg:space-y-0 lg:space-x-8'>
        <div className='tarifas-card'>
          <div>
            <h2 className='text-lg font-bold uppercase md:text-2xl'>
              Compras personales
            </h2>
            <p>Menores a $500 USD</p>
          </div>

          <div className='font-bold'>
            <p>$1 a$500 USD</p>
            <p>+ $82 USD Honorarios</p>
            <p>+ Envío a tu domicilio</p>
          </div>
          <p>
            Si la compra es menor a $500 USD, pero es mercancía repetitiva o
            para vender, adicional al servicio de honorario, se cobra el 16%
            IVA.
          </p>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>
        <div className='tarifas-card'>
          <div>
            <h2 className='text-lg font-bold uppercase md:text-2xl'>
              Compras personales
            </h2>
            <p>Mayores a $500 USD</p>
          </div>

          <div className='font-bold'>
            <p>$501 a 3,000 USD</p>
            <p>+ %18 USD Honorarios</p>
            <p>+ Envío a tu domicilio</p>
          </div>
          <p>
            Si la compra es mercancía repetitiva o para vender, adicional al
            servicio de honorario, se cobra el 16% IVA.
          </p>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>
        <div className='tarifas-card'>
          <div>
            <h2 className='text-lg font-bold uppercase md:text-2xl'>Empresariales</h2>
            <p>A partir de $100 USD</p>
          </div>

          <div className='font-bold'>
            <p>$100 USD a $3,000 USD</p>
            <p>en adelante</p>
          </div>
          <p>
            Compras empresariales o suministros para empresas comercializadoras
            cotizados según los artículos y sus aranceles.
          </p>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tarifas;
