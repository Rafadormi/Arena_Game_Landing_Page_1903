const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-[80px] px-6 flex items-center justify-between">
    <a href="#" className="flex items-center h-full py-2">
      <img
        src="https://i.postimg.cc/15KPjGJ7/ARENA-SEM-S-LOGO.png"
        alt="Arena Game"
        className="h-[50px] w-auto object-contain"
      />
    </a>
    <div className="hidden md:flex gap-8 items-center">
      <a
        href="#servicos"
        className="text-[16px] font-medium text-[#eaff96] no-underline transition-all hover:text-[#a3e635]"
      >
        Serviços
      </a>
      <a
        href="#banco"
        className="text-[16px] font-medium text-white/80 no-underline transition-all hover:text-[#a3e635]"
      >
        Banco do Brasil
      </a>
      <a
        href="#pacotes"
        className="text-[16px] font-medium text-white/80 no-underline transition-all hover:text-[#a3e635]"
      >
        Pacotes
      </a>
      <a
        href="#contato"
        className="text-[16px] font-medium text-white/80 no-underline transition-all hover:text-[#a3e635]"
      >
        Contato
      </a>
    </div>
  </nav>
);

export default Nav;
