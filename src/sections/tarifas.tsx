const Tarifas = () => {
  return (
    <section id='tarifas'>
      <h2 className='mb-12 '>Tarifas</h2>
      <div className='flex flex-col items-center justify-center space-y-12 lg:flex-row lg:space-x-8 lg:space-y-0'>
        {/* Tarjeta 1 */}
        <div className='tarifas-card transform animate-fade-in-up transition-all duration-500 hover:translate-y-[-5px] hover:scale-105 hover:shadow-lg'>
          <div>
            <h2 className='text-lg font-bold uppercase md:text-2xl'>
              Compras personales
            </h2>
             <div className='font-bold'>
            <p>(Menor a $119 USD)</p>
          </div>
          </div>
          <div className='font-bold'>
            <p>Tarifa de $300 MXN</p>
          </div>
          <p className='text-xs font-extralight'>
            Si la compra es menor a $100 USD, pero es mercancía repetitiva o
            para vender, adicional al servicio de honorario, se cobra el 16%
            IVA.
          </p>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className='tarifas-card transform animate-fade-in-up transition-all duration-500 hover:translate-y-[-5px] hover:scale-105 hover:shadow-lg'>
          <div>
            <h2 className='text-lg font-bold uppercase md:text-2xl'>
              Compras personales
            </h2>
            <h3 className='text-lg font-bold uppercase md:text-2xl'>
              ($120 a $475 USD)
            </h3>
          </div>
          <div className='font-bold'>
            <p>14% sobre el valor de tu compra</p>
          </div>
          <p className='text-xs font-extralight'>
            Si la compra es menor a $475 USD, pero es mercancía repetitiva o
            para vender, adicional al servicio de honorario, se cobra el 16%
            IVA.
          </p>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className='tarifas-card transform animate-fade-in-up transition-all duration-500 hover:translate-y-[-5px] hover:scale-105 hover:shadow-lg'>
          <div>
            <h2 className='text-lg font-bold uppercase md:text-2xl'>
              Compras personales
            </h2>
            <div className='font-bold'>
            <p>($476 a $3000 USD)</p>
          </div>
          </div>

          <div className='font-bold'>
            <p>13% sobre el valor de tu compra</p>
          </div>
          <p className='text-xs font-extralight'>
            Si la compra es menor a $3,000 USD, pero es mercancía repetitiva o
            para vender, adicional al servicio de honorario, se cobra el 16%
            IVA.
          </p>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>

        {/* Tarjeta 4 - Empresariales */}
        <div className='tarifas-card transform animate-fade-in-up transition-all duration-500 hover:translate-y-[-5px] hover:scale-105 hover:shadow-lg'>
          <div>
            <h2 className='text-lg font-bold uppercase md:text-2xl'>
              Empresariales
            </h2>
          </div>
          <div className='font-bold'>
            <p>
              Las compras empresariales se cotizan de acuerdo con la naturaleza
              del producto, para calcular los aranceles y los fletes, los cuales
              dependen del peso y volumen de la mercancía.
            </p>
          </div>

          <div className='font-bold'>
            <p>12% sobre el valor de tu compra</p>
          </div>
          <p className='text-xs font-extralight'>
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>
      </div>
      <h2 className='mb-6 text-lg font-bold uppercase md:text-2xl'>
        Cobros adicionales
      </h2>
      <ul className='list-inside list-disc space-y-2 text-base font-medium'>
        <li>
          El envío al destino final en México no está incluido y será
          determinado por separado, según el destino y las características del
          paquete.
        </li>
        <li>$3.00 USD por cada bolsa, caja o sobre recibido.</li>
        <li>$10.00 USD por cada tarima descargada.</li>
        <li>$375.00 USD por cada tarima recibida de hasta 500 libras.</li>
        <li>$515.00 USD por cada tarima recibida que supere las 500 libras.</li>
      </ul>
    </section>
  );
};

export default Tarifas;
