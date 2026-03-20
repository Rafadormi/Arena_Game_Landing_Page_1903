import { motion } from "motion/react";

const CtaCentral = () => {
  return (
    <section className="bg-gradient-to-br from-[#111A11] to-[rgba(124,252,0,0.03)] border-y border-arena-border text-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65 }}
      >
        <div className="font-condensed font-black text-[clamp(34px,5vw,62px)] text-arena-white leading-none mb-3.5">
          Tem um problema?
          <br />
          <span className="text-arena-green">O Gedson resolve.</span>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, delay: 0.08 }}
        className="text-[16px] text-arena-muted mb-8"
      >
        Manda uma mensagem agora — sem complicação.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, delay: 0.16 }}
      >
        <a
          href="https://wa.me/5544999317984?text=Oi+Gedson!+Vi+o+site+e+preciso+de+ajuda!"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-arena-green text-black font-condensed font-black text-[20px] tracking-[0.5px] uppercase py-[18px] px-[44px] rounded-[4px] shadow-[0_4px_22px_rgba(124,252,0,0.3)] transition-all hover:bg-[#90FF20] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,252,0,0.45)]"
        >
          📲 Chamar no WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default CtaCentral;
