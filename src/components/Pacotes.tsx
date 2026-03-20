import { motion } from "motion/react";

const Pacotes = () => {
  const pacotes = [
    {
      emoji: "🎓",
      name: "Pacote Estudante",
      desc: "50 Xerox + Encadernação Espiral + Plastificação",
      price: "35",
      cents: ",00",
      link: "Pacote+Estudante",
      star: true,
    },
    {
      emoji: "💼",
      name: "Pacote Emprego",
      desc: "Currículo Profissional + 10 Xerox + Plastificação",
      price: "45",
      cents: ",00",
      link: "Pacote+Emprego",
      star: false,
    },
    {
      emoji: "💻",
      name: "Pacote PC Novo",
      desc: "Formatação + Backup + Instalação de Programas",
      price: "150",
      cents: ",00",
      link: "Pacote+PC+Novo",
      star: false,
    },
    {
      emoji: "📋",
      name: "Pacote Documentos",
      desc: "Currículo + Declaração + Agendamento + 5 Xerox",
      price: "55",
      cents: ",00",
      link: "Pacote+Documentos",
      star: false,
    },
  ];

  return (
    <section
      id="pacotes"
      className="relative z-[1] py-[76px] px-6 bg-[#0C120C] border-y border-arena-border"
    >
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="flex items-center gap-4 mb-11"
        >
          <span className="text-[10px] font-bold text-arena-green bg-[rgba(124,252,0,0.07)] border border-[rgba(124,252,0,0.22)] py-1 px-3 rounded-[2px] tracking-[3px] uppercase whitespace-nowrap">
            Combos
          </span>
          <h2 className="font-condensed font-black text-[clamp(26px,4vw,40px)] text-arena-white tracking-[0.5px]">
            Pacotes com Desconto
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-arena-border2 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {pacotes.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className={`border rounded-[6px] py-[30px] px-[22px] text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-arena-green hover:shadow-[0_0_32px_rgba(124,252,0,0.18)] ${pkg.star ? "border-arena-green bg-gradient-to-br from-[#111A11] to-[rgba(124,252,0,0.04)]" : "bg-[#111A11] border-arena-border2"}`}
            >
              {pkg.star && (
                <div className="absolute top-3.5 -right-[30px] bg-arena-green text-black font-condensed font-black text-[9px] tracking-[2px] py-1 px-10 rotate-45 uppercase">
                  + Vendido
                </div>
              )}
              <span className="text-[30px] mb-2.5 block">{pkg.emoji}</span>
              <div className="font-condensed font-black text-[21px] text-arena-white uppercase mb-[7px] tracking-[0.5px]">
                {pkg.name}
              </div>
              <div className="text-[12px] text-arena-muted leading-[1.6] mb-[18px] min-h-[38px]">
                {pkg.desc}
              </div>
              <div className="font-condensed font-black text-[50px] leading-none text-arena-green">
                <sup className="text-[22px] align-super">R$</sup>
                {pkg.price}
                <sub className="text-[15px] text-arena-muted">{pkg.cents}</sub>
              </div>
              <a
                href={`https://wa.me/5544999317984?text=Oi+Gedson!+Quero+o+${pkg.link}!`}
                target="_blank"
                rel="noreferrer"
                className={`block mt-[18px] p-2.5 text-[12px] font-bold no-underline rounded-[3px] transition-all border ${pkg.star ? "bg-arena-green text-black border-arena-green" : "bg-transparent border-arena-border2 text-arena-muted hover:border-arena-green hover:text-arena-green"}`}
              >
                Pedir agora →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pacotes;
