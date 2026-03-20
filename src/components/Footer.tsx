const Footer = () => {
  return (
    <footer className="bg-arena-bg border-t border-arena-border py-11 px-6 text-center relative z-[1]">
      <div className="flex justify-center">
        <img
          src="https://i.postimg.cc/fLL7dfkr/logos_arena19032026.png"
          alt="Arena Game"
          className="h-[52px] w-auto object-contain brightness-0 invert opacity-80 drop-shadow-[0_0_12px_rgba(124,252,0,0.3)]"
        />
      </div>
      <div className="text-[13px] text-arena-muted mt-2.5">
        Informática, Celulares & Serviços · Umuarama/PR
      </div>
      <div className="flex justify-center mt-3">
        <img
          src="https://i.postimg.cc/5ydRDHgt/logotipo_correspondente_bancario_autorizado_mais_banco_do_brasil.jpg"
          alt="Correspondente Mais Banco do Brasil"
          className="h-8 w-auto object-contain opacity-50 rounded-[3px]"
        />
      </div>
      <div className="flex justify-center gap-5 mt-5 flex-wrap">
        <a
          href="#servicos"
          className="text-[12px] text-arena-muted no-underline transition-colors hover:text-arena-green"
        >
          Serviços
        </a>
        <a
          href="#banco"
          className="text-[12px] text-arena-muted no-underline transition-colors hover:text-arena-green"
        >
          Banco do Brasil
        </a>
        <a
          href="#pacotes"
          className="text-[12px] text-arena-muted no-underline transition-colors hover:text-arena-green"
        >
          Pacotes
        </a>
        <a
          href="#historia"
          className="text-[12px] text-arena-muted no-underline transition-colors hover:text-arena-green"
        >
          Nossa História
        </a>
        <a
          href="#contato"
          className="text-[12px] text-arena-muted no-underline transition-colors hover:text-arena-green"
        >
          Contato
        </a>
        <a
          href="https://wa.me/5544999317984?text=Oi+Gedson!+Vi+o+site+e+preciso+de+ajuda!"
          target="_blank"
          rel="noreferrer"
          className="text-[12px] text-arena-muted no-underline transition-colors hover:text-arena-green"
        >
          WhatsApp
        </a>
      </div>
      <div className="mt-5 pt-5 border-t border-arena-border text-[11px] text-arena-muted leading-[1.8]">
        © 2026 Arena Game · CNPJ 08.109.879/0001-16 · Praça Anchieta, 5165 –
        Umuarama/PR
        <br />
        <span className="text-arena-gold">
          Família Cavinatti Rubio · No bairro desde 1968 · Arena Game desde
          05/07/2006
        </span>
      </div>
    </footer>
  );
};

export default Footer;
