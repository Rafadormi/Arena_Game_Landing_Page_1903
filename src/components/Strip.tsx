const Strip = () => {
  const items = [
    "Informática",
    "Celulares",
    "Xerox & Impressão",
    "Currículo Profissional",
    "Agendamentos CIN · INSS · DETRAN",
    "Boletos de Qualquer Banco",
    "Depósitos BB",
    "Contratos & Declarações",
    "Acessórios",
  ];

  return (
    <div className="bg-arena-green py-[17px] overflow-hidden relative z-[1]">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item, j) => (
              <span
                key={j}
                className="font-condensed font-black text-[16px] text-black px-7 uppercase tracking-[0.5px] shrink-0"
              >
                {item} <span className="text-black/30 ml-7">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strip;
