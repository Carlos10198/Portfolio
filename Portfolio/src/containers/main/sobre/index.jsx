import React from "react";
import { MySobre } from "./style";
import { motion } from "framer-motion";

function Sobre() {
  return (
    <MySobre>
      <motion.div
        className="sobre"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>Sobre Mim</h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Estou me formando em Ciência da Computação e, embora esteja iniciando minha trajetória profissional, sou apaixonado pela área da programação. Ao longo da minha formação, desenvolvi um forte desejo de aprender, inovar e crescer. Estou à procura de oportunidades para aplicar meus conhecimentos e expandir minhas habilidades em um ambiente dinâmico e desafiador.
        </motion.p>
      </motion.div>
    </MySobre>
  );
}

export default Sobre;
