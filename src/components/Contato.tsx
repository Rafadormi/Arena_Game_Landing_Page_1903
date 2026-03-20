import { motion } from "motion/react";

const Contato = () => {
  return (
    <section id="contato" className="relative z-[1] py-[76px] px-6">
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="flex items-center gap-4 mb-11"
        >
          <span className="text-[10px] font-bold text-arena-green bg-[rgba(124,252,0,0.07)] border border-[rgba(124,252,0,0.22)] py-1 px-3 rounded-[2px] tracking-[3px] uppercase whitespace-nowrap">
            Contato
          </span>
          <h2 className="font-condensed font-black text-[clamp(26px,4vw,40px)] text-arena-white tracking-[0.5px]">
            Onde estamos
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-arena-border2 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <div className="font-condensed font-black text-[clamp(28px,3.5vw,38px)] text-arena-white leading-none mb-6">
              Vem até a gente.
              <br />
              <span className="text-arena-green">Estamos aqui.</span>
            </div>

            <div className="flex items-start gap-3.5 py-4 border-b border-arena-border">
              <div className="w-[42px] h-[42px] rounded-[4px] shrink-0 bg-[rgba(124,252,0,0.07)] border border-[rgba(124,252,0,0.18)] flex items-center justify-center text-[18px]">
                📍
              </div>
              <div>
                <div className="text-[10px] text-arena-muted tracking-[2px] uppercase mb-1">
                  Endereço
                </div>
                <div className="font-condensed font-bold text-[19px] text-arena-white">
                  Praça Anchieta, 5165
                </div>
                <div className="text-[12px] text-arena-muted mt-0.5">
                  Zona I — Umuarama/PR · CEP 87.501-230
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 py-4 border-b border-arena-border">
              <div className="w-[42px] h-[42px] rounded-[4px] shrink-0 bg-[rgba(124,252,0,0.07)] border border-[rgba(124,252,0,0.18)] flex items-center justify-center text-[18px]">
                📲
              </div>
              <div>
                <div className="text-[10px] text-arena-muted tracking-[2px] uppercase mb-1">
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/5544999317984?text=Oi+Gedson!+Vi+o+site+e+preciso+de+ajuda!"
                  target="_blank"
                  rel="noreferrer"
                  className="font-condensed font-bold text-[19px] text-arena-white no-underline hover:text-arena-green transition-colors"
                >
                  (44) 99931-7984
                </a>
                <div className="text-[12px] text-arena-muted mt-0.5">
                  Manda mensagem a qualquer hora!
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 py-4 border-b border-arena-border">
              <div className="w-[42px] h-[42px] rounded-[4px] shrink-0 bg-[rgba(124,252,0,0.07)] border border-[rgba(124,252,0,0.18)] flex items-center justify-center text-[18px]">
                ⏰
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-arena-muted tracking-[2px] uppercase mb-1">
                  Horário de Funcionamento
                </div>
                <div className="bg-arena-card border border-arena-border rounded-[4px] overflow-hidden mt-2">
                  <div className="flex justify-between py-2 px-3.5 border-b border-arena-border text-[13px]">
                    <span className="text-arena-muted font-semibold">
                      Segunda a Sexta
                    </span>
                    <span className="text-arena-green font-bold">
                      8h às 19h
                    </span>
                  </div>
                  <div className="flex justify-between py-2 px-3.5 border-b border-arena-border text-[13px]">
                    <span className="text-arena-muted font-semibold">
                      Sábado
                    </span>
                    <span className="text-arena-green font-bold">
                      8h às 17h
                    </span>
                  </div>
                  <div className="flex justify-between py-2 px-3.5 text-[13px]">
                    <span className="text-arena-muted font-semibold">
                      Domingo
                    </span>
                    <span className="text-arena-green font-bold">
                      8h às 12h
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 py-4">
              <div className="w-[42px] h-[42px] rounded-[4px] shrink-0 bg-[rgba(124,252,0,0.07)] border border-[rgba(124,252,0,0.18)] flex items-center justify-center text-[18px]">
                🏢
              </div>
              <div>
                <div className="text-[10px] text-arena-muted tracking-[2px] uppercase mb-1">
                  CNPJ
                </div>
                <div className="font-condensed font-bold text-[16px] text-arena-white">
                  08.109.879/0001-16
                </div>
                <div className="text-[12px] text-arena-muted mt-0.5">
                  Arena Game — Informática, Celulares & Serviços
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="rounded-[6px] overflow-hidden border border-arena-border2 relative"
          >
            <div className="absolute inset-0 border-2 border-transparent bg-[linear-gradient(#080B08,#080B08)_padding-box,linear-gradient(135deg,#7CFC00,transparent)_border-box] rounded-[6px] pointer-events-none z-[1]"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.5840395025607!2d-53.31311093089608!3d-23.75328492068707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2d55dd345c325%3A0xc44d12dd062d1824!2sArean%20Game%20-%20Lan%20House!5e1!3m2!1spt-PT!2sbr!4v1773807611449!5m2!1spt-PT!2sbr"
              className="block w-full h-[380px] grayscale-[0.5] brightness-75"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arena Game Umuarama"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
