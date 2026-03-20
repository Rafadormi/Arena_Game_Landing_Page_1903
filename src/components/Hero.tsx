import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-[80px] overflow-hidden bg-black">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        {/* Main center-right green glow */}
        <div className="absolute top-1/2 left-[70%] -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#7CFC00] opacity-[0.15] blur-[120px] rounded-full pointer-events-none"></div>
        {/* Secondary left glow */}
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-[#7CFC00] opacity-[0.08] blur-[100px] rounded-full pointer-events-none"></div>
        {/* Subtle noise/texture overlay */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-screen"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-10 h-full">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col pt-20 md:pt-0 z-20"
        >
          <h1 className="font-sans font-black text-[clamp(60px,8vw,110px)] leading-[0.95] text-white uppercase tracking-[-0.03em] drop-shadow-2xl">
            O Gedson<br />
            <span className="bg-gradient-to-b from-[#eaff96] to-[#a3e635] text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(163,230,53,0.3)]">Resolve.</span>
          </h1>
          
          <p className="mt-6 text-[clamp(18px,2vw,24px)] text-white/90 font-medium leading-[1.4] max-w-[480px]">
            Informática, celulares, documentos e banco.<br />
            Tudo em um só lugar.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/5544999317984?text=Oi+Gedson!+Vi+o+site+e+preciso+de+ajuda!"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-b from-[#65d017] to-[#44960b] text-white font-bold text-[18px] py-4 px-8 rounded-[8px] shadow-[0_0_25px_rgba(124,252,0,0.3)] hover:scale-105 hover:shadow-[0_0_35px_rgba(124,252,0,0.5)] transition-all duration-300 border border-[#7CFC00]/50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
              </svg>
              Chamar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center bg-transparent border border-white/40 text-white font-bold text-[18px] py-4 px-8 rounded-[8px] hover:bg-white/10 transition-colors duration-300"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-full flex items-end justify-center md:justify-end z-10"
        >
          <img
            src="/hero.png"
            alt="Gedson apontando"
            className="w-[120%] max-w-[800px] h-auto object-contain object-bottom drop-shadow-[0_0_60px_rgba(124,252,0,0.25)] translate-y-[5%]"
            style={{ filter: "contrast(1.05) saturate(1.1)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
