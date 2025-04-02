"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Tarifas = () => {
  return (
    <section id="tarifas">
      <h2 className="mb-12 text-center text-3xl font-bold">Tarifas</h2>
      <div className="flex flex-col items-center justify-center space-y-12 lg:flex-row lg:space-x-8 lg:space-y-0">
        {/* Tarjeta 1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="tarifas-card"
        >
          <h2 className="text-lg font-bold uppercase md:text-2xl">Compras personales</h2>
          <h3 className="text-lg font-bold uppercase md:text-2xl">($1 a $100 USD)</h3>
          <div className="font-bold">
            <p>+ Honorarios $45 USD</p>
            <p>+ $2.00 USD por cada caja / $1.00 por bolsa</p>
            <p>+ Envío a tu domicilio</p>
          </div>
        </motion.div>

        {/* Tarjeta 2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="tarifas-card"
        >
          <h2 className="text-lg font-bold uppercase md:text-2xl">Compras personales</h2>
          <h3 className="text-lg font-bold uppercase md:text-2xl">($101 a $475 USD)</h3>
          <div className="font-bold">
            <p>+ Honorarios $95 USD</p>
            <p>+ $2.00 USD por cada caja / $1.00 por bolsa</p>
            <p>+ Envío a tu domicilio</p>
          </div>
        </motion.div>

        {/* Tarjeta 3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="tarifas-card"
        >
          <h2 className="text-lg font-bold uppercase md:text-2xl">Compras personales</h2>
          <h3 className="text-lg font-bold uppercase md:text-2xl">($476 a $3,000 USD)</h3>
          <div className="font-bold">
            <p>+ Honorarios 19%</p>
            <p>+ $2.00 USD por cada caja / $1.00 USD por bolsa</p>
            <p>+ Envío a domicilio</p>
          </div>
        </motion.div>

        {/* Tarjeta 4 - Empresariales */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="tarifas-card"
        >
          <h2 className="text-lg font-bold uppercase md:text-2xl">Empresariales</h2>
          <p className="text-xs font-extralight">
            Las compras empresariales se cotizan de acuerdo con la naturaleza del producto.
          </p>
          <div className="font-bold">
            <p>• Honorarios 19%</p>
            <p>• IVA 16%</p>
            <p>• Aranceles</p>
            <p>• Fletes, sobrepeso y dimensiones de la mercancía</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tarifas;
