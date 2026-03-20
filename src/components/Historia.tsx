import { motion } from "motion/react";

const Historia = () => {
  return (
    <section
      id="historia"
      className="relative z-[1] py-[76px] px-6 bg-gradient-to-br from-[#0B0900] via-[#100D02] to-[#0A0B08] border-y border-[#2A2200] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(218,165,32,0.08),transparent_55%)] pointer-events-none"></div>
      <div className="max-w-[1160px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="relative flex justify-center order-last md:order-first"
          >
            <div className="absolute -inset-3.5 border border-[rgba(218,165,32,0.2)] rounded-[8px] pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-arena-gold to-transparent"></div>
            </div>
            <img
              src="https://i.postimg.cc/JhFw62JP/gedson_sem_fundo.png"
              alt="Gedson Cavinatti Rubio"
              className="w-full max-w-[380px] drop-shadow-[0_8px_40px_rgba(218,165,32,0.15)] rounded-[6px] relative z-[1]"
            />
            <div className="absolute bottom-7 right-0 md:-right-4 bg-arena-gold text-black font-condensed font-black text-[11px] tracking-[1px] py-2 px-4 rounded-[3px] uppercase whitespace-nowrap z-[2] shadow-[0_4px_16px_rgba(218,165,32,0.35)]">
              Desde 05 · 07 · 2006
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="flex flex-col gap-5"
          >
            <div className="font-condensed font-black text-[clamp(30px,3.5vw,46px)] text-arena-white leading-[1.05]">
              "Vai lá na lan —<br />
              <span className="text-arena-gold">o Gedson resolve."</span>
            </div>
            <p className="text-[15px] text-[#5A6040] leading-[1.85]">
              Essa frase já corre na boca de Umuarama. Mas a história da família{" "}
              <strong className="text-arena-text">Cavinatti Rubio</strong> neste
              bairro é muito mais antiga.
            </p>

            <div className="flex flex-col gap-0">
              <div className="grid grid-cols-[76px_1fr] gap-4 relative pb-5">
                <div className="absolute left-[34px] top-5 bottom-0 w-[1px] bg-gradient-to-b from-[rgba(218,165,32,0.4)] to-transparent"></div>
                <div className="font-condensed font-black text-[19px] text-arena-gold leading-none pt-0.5 text-right relative">
                  1968
                  <div className="absolute -right-[17px] top-[7px] w-2.5 h-2.5 rounded-full bg-arena-gold shadow-[0_0_8px_rgba(218,165,32,0.5)]"></div>
                </div>
                <div className="pl-2">
                  <div className="text-[13px] font-bold text-arena-text mb-1">
                    Comercial Rubio
                  </div>
                  <div className="text-[12px] text-[#4A5030] leading-[1.5]">
                    O pai de Gedson abre as portas na Praça Anchieta. A família
                    planta raízes e ganha a confiança da comunidade.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[76px_1fr] gap-4 relative pb-5">
                <div className="absolute left-[34px] top-5 bottom-0 w-[1px] bg-gradient-to-b from-[rgba(218,165,32,0.4)] to-transparent"></div>
                <div className="font-condensed font-black text-[19px] text-arena-gold leading-none pt-0.5 text-right relative">
                  2006
                  <div className="absolute -right-[17px] top-[7px] w-2.5 h-2.5 rounded-full bg-arena-gold shadow-[0_0_8px_rgba(218,165,32,0.5)]"></div>
                </div>
                <div className="pl-2">
                  <div className="text-[13px] font-bold text-arena-text mb-1">
                    Arena Game nasce
                  </div>
                  <div className="text-[12px] text-[#4A5030] leading-[1.5]">
                    Em 5 de julho, Gedson Cavinatti Rubio abre a Arena Game no
                    mesmo bairro do pai. A comunidade passa a ter um ponto de
                    referência para resolver tudo.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[76px_1fr] gap-4 relative">
                <div className="font-condensed font-black text-[19px] text-arena-gold leading-none pt-0.5 text-right relative">
                  Hoje
                  <div className="absolute -right-[17px] top-[7px] w-2.5 h-2.5 rounded-full bg-arena-gold shadow-[0_0_8px_rgba(218,165,32,0.5)]"></div>
                </div>
                <div className="pl-2">
                  <div className="text-[13px] font-bold text-arena-text mb-1">
                    Centro de Soluções + Banco do Brasil
                  </div>
                  <div className="text-[12px] text-[#4A5030] leading-[1.5]">
                    Quase 20 anos depois, a Arena Game é o escritório do bairro.
                    Informática, celulares, documentos e agora Correspondente
                    Banco do Brasil.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-7 flex-wrap py-4 border-y border-[rgba(218,165,32,0.15)]">
              <div>
                <div className="font-condensed font-black text-[38px] text-arena-gold leading-none">
                  57
                </div>
                <div className="text-[11px] text-[#4A5030] tracking-[1px] uppercase mt-1">
                  Anos de família no bairro
                </div>
              </div>
              <div>
                <div className="font-condensed font-black text-[38px] text-arena-gold leading-none">
                  19
                </div>
                <div className="text-[11px] text-[#4A5030] tracking-[1px] uppercase mt-1">
                  Anos de Arena Game
                </div>
              </div>
              <div>
                <div className="font-condensed font-black text-[38px] text-arena-gold leading-none">
                  +40
                </div>
                <div className="text-[11px] text-[#4A5030] tracking-[1px] uppercase mt-1">
                  Serviços oferecidos
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5544999317984?text=Oi+Gedson!+Vi+o+site+e+preciso+de+ajuda!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-arena-green text-black font-condensed font-black text-[17px] tracking-[0.5px] uppercase py-[15px] px-[30px] rounded-[4px] shadow-[0_4px_22px_rgba(124,252,0,0.3)] transition-all hover:bg-[#90FF20] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,252,0,0.45)] w-fit mt-2"
            >
              📲 Falar com o Gedson
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
