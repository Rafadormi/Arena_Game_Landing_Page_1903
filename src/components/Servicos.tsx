import { motion } from "motion/react";

const Servicos = () => {
  const cards = [
    {
      icon: "💻",
      title: "Informática & Manutenção",
      items: [
        "Formatação de PC e Notebook",
        "Backup e Recuperação de Dados",
        "Instalação de Programas",
        "Remoção de Vírus e Malware",
        "Upgrade de Peças — RAM, SSD, HD",
        "Configuração de Rede Wi-Fi",
        "Suporte Remoto e Presencial",
      ],
    },
    {
      icon: "📱",
      title: "Celulares & Acessórios",
      items: [
        "Venda de Celulares Novos e Seminovos",
        "Recargas — Claro, Oi, TIM, Vivo",
        "Carregadores e Cabos USB/HDMI",
        "Capinhas e Películas Protetoras",
        "Fones de Ouvido",
        "Pendrives e Cartões de Memória",
        "Mouses, Teclados e Periféricos",
      ],
    },
    {
      icon: "📄",
      title: "Documentos & Impressão",
      items: [
        "Xerox P&B e Colorida",
        "Impressão de Documentos e Fotos",
        "Scanner e Digitalização",
        "Digitação de Textos",
        "Encadernação Espiral",
        "Plastificação",
        "Trabalhos Acadêmicos e Escolares",
      ],
    },
    {
      icon: "📋",
      title: "Serviços ao Cidadão",
      items: [
        "Elaboração de Currículo Profissional",
        "Agendamento CIN — Carteira de Identidade",
        "Agendamentos INSS, DETRAN, SUS",
        "Contratos de Locação e Venda",
        "Declaração de Endereço e Residência",
        "Carteira de Pesca",
        "Matrículas e Declarações Escolares",
      ],
    },
    {
      icon: "💳",
      title: "Financeiro & Contas",
      items: [
        "Pagamento de Contas em Geral",
        "Boletos de Qualquer Banco — vencidos ou não",
        "2ª Via — Água, Luz, Gás",
        "Pesquisa de Multas e Débitos",
        "Consulta de Situação Veicular",
      ],
    },
    {
      icon: "🌐",
      title: "Acesso & Internet",
      items: [
        "Acesso à Internet por hora",
        "Computadores disponíveis no local",
        "Digitalização e envio de documentos",
        "Preenchimento de formulários online",
        "Pesquisas e serviços gov.br",
      ],
    },
  ];

  return (
    <section id="servicos" className="relative z-[1] py-[76px] px-6">
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="flex items-center gap-4 mb-11"
        >
          <span className="text-[10px] font-bold text-arena-green bg-[rgba(124,252,0,0.07)] border border-[rgba(124,252,0,0.22)] py-1 px-3 rounded-[2px] tracking-[3px] uppercase whitespace-nowrap">
            Serviços
          </span>
          <h2 className="font-condensed font-black text-[clamp(26px,4vw,40px)] text-arena-white tracking-[0.5px]">
            Tudo o que você precisa
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-arena-border2 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="bg-arena-card border border-arena-border rounded-[6px] p-6 relative overflow-hidden transition-all duration-300 hover:border-arena-green-dark hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(124,252,0,0.18)] group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-arena-green to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="text-[32px] mb-3.5 block">{card.icon}</span>
              <div className="font-condensed font-black text-[18px] text-arena-white uppercase tracking-[1px] mb-3.5">
                {card.title}
              </div>
              <ul className="flex flex-col gap-[7px]">
                {card.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-[13px] text-arena-muted flex items-start gap-2 leading-[1.4]"
                  >
                    <span className="text-arena-green text-[11px] mt-[2px] shrink-0">
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
