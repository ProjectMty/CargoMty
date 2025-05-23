const Tarifas = () => {
  return (
    <section id="tarifas">
      <h2 className="mb-12 ">Tarifas</h2>
      <div className="flex flex-col items-center justify-center space-y-12 lg:flex-row lg:space-x-8 lg:space-y-0">
        {/* Tarjeta 1 */}
        <div className="tarifas-card transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:translate-y-[-5px] animate-fade-in-up">
          <div>
            <h2 className="text-lg font-bold uppercase md:text-2xl">
              Compras personales
            </h2>
            <h3 className="text-lg font-bold uppercase md:text-2xl">
              ($1 a $100 USD)
            </h3>
          </div>
          <div className="font-bold">
            <p>+ Honorarios $45 USD</p>
            <p>+ $2.00 USD por cada caja / $1.00 por bolsa</p>
            <p>+ Envío a tu domicilio</p>
          </div>
          <p className="text-xs font-extralight">
            Si la compra es menor a $100 USD, pero es mercancía repetitiva o
            para vender, adicional al servicio de honorario, se cobra el 16%
            IVA.
          </p>
          <p className="text-xs font-extralight">
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="tarifas-card transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:translate-y-[-5px] animate-fade-in-up">
          <div>
            <h2 className="text-lg font-bold uppercase md:text-2xl">
              Compras personales
            </h2>
            <h3 className="text-lg font-bold uppercase md:text-2xl">
              ($101 a $475 USD)
            </h3>
          </div>
          <div className="font-bold">
            <p>+ Honorarios $95 USD</p>
            <p>+ $2.00 USD por cada caja / $1.00 por bolsa</p>
            <p>+ Envío a tu domicilio</p>
          </div>
          <p className="text-xs font-extralight">
            Si la compra es menor a $475 USD, pero es mercancía repetitiva o
            para vender, adicional al servicio de honorario, se cobra el 16%
            IVA.
          </p>
          <p className="text-xs font-extralight">
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="tarifas-card transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:translate-y-[-5px] animate-fade-in-up">
          <div>
            <h2 className="text-lg font-bold uppercase md:text-2xl">
              Compras personales
            </h2>
            <h3 className="text-lg font-bold uppercase md:text-2xl">
              ($476 A $3,000 USD)
            </h3>
          </div>

          <div className="font-bold">
            <p>+ Honorarios 19%</p>
            <p>+ $2.00 USD por cada caja / $1.00 USD por bolsa</p>
            <p>+ Envío a domicilio</p>
          </div>
          <p className="text-xs font-extralight">
            Si la compra es menor a $3,000 USD, pero es mercancía repetitiva o
            para vender, adicional al servicio de honorario, se cobra el 16%
            IVA.
          </p>
          <p className="text-xs font-extralight">
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>

        {/* Tarjeta 4 - Empresariales */}
        <div className="tarifas-card transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:translate-y-[-5px] animate-fade-in-up">
          <div>
            <h2 className="text-lg font-bold uppercase md:text-2xl">
              Empresariales
            </h2>
          </div>
          <p className="text-xs font-extralight">
            Las compras empresariales se cotizan de acuerdo con la naturaleza
            del producto, para calcular los aranceles y los fletes, los cuales
            dependen del peso y volumen de la mercancía.
          </p>
          <div className="font-bold">
            <p>Los conceptos que se cobran son los siguientes:</p>
          </div>
          <div className="font-bold">
            <p>• Honorarios 19%</p>
            <p>• IVA 16%</p>
            <p>• Aranceles</p>
            <p>• Fletes, sobrepeso y dimensiones de la mercancía</p>
          </div>
          <p className="text-xs font-extralight">
            *Sobrepeso: Arriba de 20 kg peso volumétrico se le agrega concepto
            de sobrepeso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tarifas;
