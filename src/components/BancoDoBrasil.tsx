import { motion } from "motion/react";

const BancoDoBrasil = () => {
  return (
    <section
      id="banco"
      className="relative z-[1] py-[76px] px-6 bg-gradient-to-br from-[#08090F] to-[#0C0D18] border-y border-[#1A1E38] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(218,165,32,0.05),transparent_60%)] pointer-events-none"></div>
      <div className="max-w-[1160px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="flex items-center gap-6 flex-wrap mb-9"
        >
          <div className="bg-white rounded-[6px] py-2.5 px-4 flex items-center shadow-[0_4px_20px_rgba(218,165,32,0.15)] shrink-0">
            <img
              src="https://i.postimg.cc/5ydRDHgt/logotipo_correspondente_bancario_autorizado_mais_banco_do_brasil.jpg"
              alt="Mais Banco do Brasil"
              className="h-[52px] w-auto block"
            />
          </div>
          <div>
            <h2 className="font-condensed font-black text-[clamp(20px,3vw,32px)] text-white leading-[1.1]">
              Correspondente Autorizado
              <br />
              <span className="text-arena-gold">Mais Banco do Brasil</span>
            </h2>
            <p className="text-[13px] text-[#5A6080] mt-1.5">
              Transações bancárias com a comodidade de estar pertinho de você —
              sem fila de banco
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="bg-gradient-to-br from-[rgba(218,165,32,0.07)] to-[rgba(218,165,32,0.02)] border border-[rgba(218,165,32,0.3)] rounded-[7px] p-6 relative overflow-hidden"
          >
            <div className="absolute top-3.5 -right-8 bg-arena-gold text-black font-condensed font-black text-[9px] tracking-[2px] py-1 px-11 rotate-45 uppercase">
              DISPONÍVEL AGORA
            </div>
            <div className="text-[34px] mb-3">🧾</div>
            <div className="font-condensed font-black text-[21px] text-arena-gold uppercase tracking-[1px] mb-2">
              Boletos de Qualquer Banco
            </div>
            <div className="text-[13px] text-[#5A6080] leading-[1.75]">
              Vencido ou não —{" "}
              <strong className="text-[#A0B0C0]">
                a gente imprime um novo e você paga aqui
              </strong>
              . Conta de luz, água, cartão, financiamento, IPVA, multa. Qualquer
              banco, sem precisar ir ao banco ou baixar aplicativo.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="bg-gradient-to-br from-[rgba(218,165,32,0.07)] to-[rgba(218,165,32,0.02)] border border-[rgba(218,165,32,0.3)] rounded-[7px] p-6 relative overflow-hidden"
          >
            <div className="absolute top-3.5 -right-8 bg-arena-gold text-black font-condensed font-black text-[9px] tracking-[2px] py-1 px-11 rotate-45 uppercase">
              DISPONÍVEL AGORA
            </div>
            <div className="text-[34px] mb-3">💰</div>
            <div className="font-condensed font-black text-[21px] text-arena-gold uppercase tracking-[1px] mb-2">
              Depósitos Banco do Brasil
            </div>
            <div className="text-[13px] text-[#5A6080] leading-[1.75]">
              Faça{" "}
              <strong className="text-[#A0B0C0]">
                depósitos em contas Banco do Brasil
              </strong>{" "}
              aqui mesmo. Sem deslocamento, sem fila. Rápido, seguro e na sua
              vizinhança.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="border border-[#1A1E38] rounded-[7px] p-6 md:col-span-2"
          >
            <div className="font-condensed font-bold text-[13px] text-[#3A456A] uppercase tracking-[2px] mb-3.5">
              Outros serviços da rede Mais BB — consulte disponibilidade
            </div>
            <ul className="flex flex-col gap-2">
              {[
                "Recebimentos de títulos, tributos e convênios",
                "Pagamentos de saques — conta corrente, salário ou poupança",
                "Pagamentos de benefícios sociais",
                "Recepção e encaminhamento de propostas de abertura de conta",
                "Recepção e encaminhamento de pedidos de empréstimos e financiamentos",
                "Recepção e encaminhamento de propostas de cartão de crédito",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-[13px] text-[#2A3550] flex gap-2 leading-[1.5]"
                >
                  <span className="shrink-0">○</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, delay: 0.32 }}
          className="mt-7 bg-[rgba(218,165,32,0.08)] border border-[rgba(218,165,32,0.22)] rounded-[6px] py-5 px-6 flex items-center justify-between flex-wrap gap-4"
        >
          <div className="font-condensed font-bold text-[19px] text-white">
            Precisa pagar um boleto ou fazer depósito?
            <br />
            <span className="text-arena-gold">O Gedson resolve agora.</span>
          </div>
          <a
            href="https://wa.me/5544999317984?text=Oi+Gedson!+Preciso+de+serviço+bancário!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-arena-gold text-black font-condensed font-black text-[15px] tracking-[0.5px] uppercase py-3 px-6 rounded-[4px] whitespace-nowrap shadow-[0_4px_18px_rgba(218,165,32,0.25)] transition-all hover:bg-arena-gold-lt hover:-translate-y-0.5"
          >
            📲 Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BancoDoBrasil;
