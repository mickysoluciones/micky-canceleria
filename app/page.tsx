'use client'

import { useState } from 'react'

export default function MickyCanceleriaJapandi() {
  const [menuOpen, setMenuOpen] = useState(false)

  const gallery = [
    '/galeria1.jpg', '/galeria2.jpg', '/galeria3.jpg', '/galeria4.jpg',
    '/galeria5.jpg', '/galeria6.jpg', '/galeria7.jpg', '/galeria8.jpg',
    '/galeria9.jpg', '/galeria10.jpg', '/galeria11.jpg', '/galeria12.jpg',
  ]

  // FUNCIÓN SCROLL SUAVE JS
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#fcfaf7] text-[#2f2a24] min-h-screen overflow-x-hidden font-sans antialiased">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcfaf7]/80 backdrop-blur-md border-b border-[#e9e2d5]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center transition hover:opacity-80">
            <img
              src="/logo.png"
              alt="Micky Cancelería"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] font-medium text-[#7a6f62]">
            <a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')} className="hover:text-black transition-colors duration-300">Nosotros</a>
            <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')} className="hover:text-black transition-colors duration-300">Sistemas</a>
            <a href="#galeria" onClick={(e) => scrollToSection(e, 'galeria')} className="hover:text-black transition-colors duration-300">Galería</a>
            <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="hover:text-black transition-colors duration-300">Contacto</a>
          </nav>

          {/* BOTÓN HAMBURGUESA MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            aria-label="Menú"
          >
            <span className={`w-6 h-[1.5px] bg-[#2f2a24] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-[#2f2a24] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-[#2f2a24] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
          </button>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div className="md:hidden bg-[#fcfaf7] border-t border-[#e9e2d5] animate-fadeIn">
            <nav className="flex flex-col px-8 py-8 gap-6 uppercase tracking-[0.2em] text-xs font-medium text-[#7a6f62]">
              <a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')} className="hover:text-black">Nosotros</a>
              <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')} className="hover:text-black">Sistemas</a>
              <a href="#galeria" onClick={(e) => scrollToSection(e, 'galeria')} className="hover:text-black">Galería</a>
              <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="hover:text-black">Contacto</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION - ESTRUCTURA UNIFICADA DE ALINEACIÓN */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[#fcfaf7]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Flexcol en móvil para ordenar Texto -> Imagen -> Botón. Grid en Desktop. */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* COLUMNA IZQUIERDA: TEXTO Y BOTÓN INTEGRADOS (PRIMERO EN MÓVIL Y DESKTOP) */}
            <div className="order-1 lg:col-span-5 flex flex-col justify-center">
              {/* Subtítulo: Agrandado para mejorar legibilidad */}
              <span className="uppercase tracking-[0.25em] text-sm md:text-base font-semibold text-[#8a7a68] mb-4 block">
                Cancelería de Alta Gama
              </span>
              {/* Título Principal: Reducido proporcionalmente */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#2f2a24] tracking-tight leading-[1.2] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Elegancia, <br />
                luz y <br />
                <span className="font-normal italic text-[#51473c]">perfección.</span>
              </h1>
              <p className="text-[#61574c] text-sm md:text-base leading-relaxed max-w-sm mb-6 lg:mb-8 opacity-90">
                Sistemas de aluminio y cristal templado. Acabados de lujo diseñados para integrarse a tu proyecto.
              </p>

              {/* Botón en Desktop: Fluye naturalmente dentro del contenedor izquierdo haciendo que el slider se alinee a él */}
              <div className="hidden lg:flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="#galeria"
                  onClick={(e) => scrollToSection(e, 'galeria')}
                  className="bg-[#2f2a24] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-10 py-4.5 rounded-lg hover:bg-black transition-all duration-400 text-center shadow-sm min-w-[180px] w-full sm:w-auto"
                >
                  Proyectos
                </a>
              </div>
            </div>

            {/* SLIDER DE IMÁGENES (SEGUNDO EN MÓVIL) */}
            <div className="order-2 lg:col-span-7 relative min-h-[350px] sm:min-h-[450px] lg:min-h-full overflow-hidden rounded-2xl shadow-sm my-4 lg:my-0">
              <div className="absolute inset-0 animate-fade">
                <img src="/hero1.jpg" alt="Ventanales de aluminio minimalista" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 animate-fade2">
                <img src="/hero2.jpg" alt="Canceles de baño de cristal templado" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 animate-fade3">
                <img src="/hero3.jpg" alt="Estructuras modernas de aluminio" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-black/[0.04] pointer-events-none" />
            </div>

            {/* BOTÓN DE ACCIÓN EN MÓVIL (TERCERO EN MÓVIL) */}
            <div className="order-3 lg:hidden flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#galeria"
                onClick={(e) => scrollToSection(e, 'galeria')}
                className="bg-[#2f2a24] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-10 py-4.5 rounded-lg hover:bg-black transition-all duration-400 text-center shadow-sm min-w-[180px] w-full sm:w-auto"
              >
                Proyectos
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN ACERCA DE NOSOTROS */}
      <section id="nosotros" className="py-20 lg:py-24 bg-[#fcfaf7]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="uppercase tracking-[0.45em] text-[10px] font-bold text-[#8a7a68] mb-4 block">
              Acerca de Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-normal text-[#2f2a24] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Compromiso con el detalle <br />
              <span className="font-normal italic text-[#51473c]">y con nuestros clientes.</span>
            </h2>
            <p className="text-[#61574c] text-sm md:text-base leading-relaxed">
              En Micky Cancelería nos especializamos en la conceptualización, fabricación e instalación de canceles y puertas de aluminio con mas de 2 años de experiencia, respaldados por un equipo con visión de diseño y precisión de obra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl mx-auto mt-16">
            {/* PERFIL GABRIELA */}
            <div className="flex flex-col items-center group max-w-xs mx-auto w-full">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#f5efe4] border border-[#e1d9cb] shadow-sm hover:shadow-md transition-all duration-300 mb-5">
                <img src="/arquitecta2.jpg" alt="Arq. Gabriela" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-normal text-[#2f2a24]" style={{ fontFamily: 'Georgia, serif' }}>Arq. Gabriela Molina</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a39482] mt-1.5 block">CEO y Directora de Diseño</span>
              </div>
            </div>

            {/* PERFIL CARLOS */}
            <div className="flex flex-col items-center group max-w-xs mx-auto w-full">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#f5efe4] border border-[#e1d9cb] shadow-sm hover:shadow-md transition-all duration-300 mb-5">
                <img src="/arquitecto1.jpg" alt="Arq. Carlos Saldaña" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-normal text-[#2f2a24]" style={{ fontFamily: 'Georgia, serif' }}>Arq. Carlos Saldaña</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a39482] mt-1.5 block">Director de Operaciones</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-20 lg:py-28 bg-[#f5efe4] border-y border-[#e9e2d5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="uppercase tracking-[0.25em] text-[#a39482] text-xs font-bold block mb-3">Nuestras Soluciones</span>
            <h2 className="text-3xl md:text-4xl font-normal text-[#2f2a24] mb-4" style={{ fontFamily: 'Georgia, serif' }}>Diseño estructural y atemporal</h2>
            <p className="text-[#61574c] text-base leading-relaxed">Combinamos perfiles de la más alta calidad con cristales procesados bajo normas estrictas para asegurar aislamiento y estética impecable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fcfaf7] rounded-xl overflow-hidden border border-[#e1d9cb] group shadow-sm">
              <div className="h-[240px] overflow-hidden relative"><img src="/image1.png" alt="Puertas y Ventanas" className="w-full h-full object-cover group-hover:scale-103" /></div>
              <div className="p-8">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a39482] block mb-2">Líneas Europeas</span>
                <h3 className="text-xl font-normal text-[#2f2a24] mb-3" style={{ fontFamily: 'Georgia, serif' }}>Puertas & Ventanas</h3>
                <p className="text-[#61574c] text-sm leading-relaxed">Maximiza la entrada de luz natural con sistemas corredizos y abatibles de perfiles delgados.</p>
              </div>
            </div>

            <div className="bg-[#fcfaf7] rounded-xl overflow-hidden border border-[#e1d9cb] group shadow-sm">
              <div className="h-[240px] overflow-hidden relative"><img src="/image2.png" alt="Cristal Templado" className="w-full h-full object-cover group-hover:scale-103" /></div>
              <div className="p-8">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a39482] block mb-2">Herrajes Finos</span>
                <h3 className="text-xl font-normal text-[#2f2a24] mb-3" style={{ fontFamily: 'Georgia, serif' }}>Cristal Templado</h3>
                <p className="text-[#61574c] text-sm leading-relaxed">Canceles de baño y barandales con cristal de seguridad y herrajes minimalistas.</p>
              </div>
            </div>

            <div className="bg-[#fcfaf7] rounded-xl overflow-hidden border border-[#e1d9cb] group shadow-sm">
              <div className="h-[240px] overflow-hidden relative"><img src="/image3.png" alt="Estructuras Especiales" className="w-full h-full object-cover group-hover:scale-103" /></div>
              <div className="p-8">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#a39482] block mb-2">Ingeniería</span>
                <h3 className="text-xl font-normal text-[#2f2a24] mb-3" style={{ fontFamily: 'Georgia, serif' }}>Estructuras & Domos</h3>
                <p className="text-[#61574c] text-sm leading-relaxed">Techados, domos de cristal y obras especiales a la medida arquitectónica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-20 lg:py-28 bg-[#fcfaf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase tracking-[0.25em] text-[#a39482] text-xs font-bold block mb-3">Portafolio</span>
            <h2 className="text-3xl md:text-4xl font-normal text-[#2f2a24]" style={{ fontFamily: 'Georgia, serif' }}>Detalles de Obra Terminada</h2>
            <div className="w-12 h-[1px] bg-[#2f2a24] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl bg-[#f5efe4] border border-[#e9e2d5] aspect-[4/5] relative group shadow-sm">
                <img src={image} alt={`Proyecto ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 lg:py-28 bg-[#f5efe4] border-t border-[#e9e2d5]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.25em] text-[#a39482] text-xs font-bold block mb-3">Contacto</span>
            <h2 className="text-3xl md:text-4xl font-normal text-[#2f2a24] mb-4" style={{ fontFamily: 'Georgia, serif' }}>Inicia tu Cotización</h2>
            <p className="text-[#61574c] text-sm">Compártenos las medidas aproximadas o planos de tu proyecto.</p>
          </div>

          <form action="https://formsubmit.co/solucionescailc@gmail.com" method="POST" className="bg-[#fcfaf7] rounded-xl p-8 md:p-12 border border-[#e1d9cb] shadow-sm">
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="text" name="nombre" required placeholder="Nombre" className="w-full border border-[#d3c8b7] rounded-lg px-4 py-3 text-sm focus:outline-none" />
              <input type="tel" name="telefono" required placeholder="Teléfono" className="w-full border border-[#d3c8b7] rounded-lg px-4 py-3 text-sm focus:outline-none" />
            </div>
            <input type="email" name="email" required placeholder="Correo electrónico" className="w-full border border-[#d3c8b7] rounded-lg px-4 py-3 text-sm focus:outline-none mb-6" />
            <textarea name="mensaje" rows={5} required placeholder="Cuéntanos sobre tu proyecto..." className="w-full border border-[#d3c8b7] rounded-lg px-4 py-3 text-sm focus:outline-none mb-8 resize-none" />
            
            <button type="submit" className="w-full bg-[#2f2a24] text-white py-4 rounded-lg text-xs uppercase tracking-[0.25em] font-bold hover:bg-black transition-colors">
              Contactar
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2f2a24] text-[#ece6dc]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img src="/logo.png" alt="Micky Cancelería" className="h-10 w-auto mb-6 brightness-0 invert" />
              <p className="text-[#b5ab9d] text-sm leading-relaxed">Ingeniería y diseño en cancelería de aluminio y cristal templado de alta gama.</p>
            </div>
            <div>
              <h4 className="uppercase tracking-[0.2em] text-xs font-bold mb-6 text-[#cfa881]">Información</h4>
              <p className="text-sm text-[#b5ab9d]">📞 55 1440 3045<br />✉️ solucionescailc@gmail.com<br />📍 Ciudad de México</p>
            </div>
            <div>
              <h4 className="uppercase tracking-[0.2em] text-xs font-bold mb-6 text-[#cfa881]">Enlaces</h4>
              <div className="flex flex-col gap-2 text-sm text-[#b5ab9d]">
                <a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')} className="hover:text-white">Nosotros</a>
                <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')} className="hover:text-white">Sistemas</a>
                <a href="#galeria" onClick={(e) => scrollToSection(e, 'galeria')} className="hover:text-white">Galería</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-12 pt-8 text-center text-[#807669] text-xs">
            © {new Date().getFullYear()} MICKY CANCELERÍA. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE DISCRETO */}
      <a 
        href="https://wa.me/525514403045" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 hover:scale-105 active:scale-95 transition-transform duration-200"
        aria-label="Chat de WhatsApp"
      >
        <div className="bg-[#25d366] p-4 rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.51 5.279 3.512 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.488 4.654 1.489 5.433 0 9.85-4.37 9.853-9.755.002-2.609-1.014-5.059-2.86-6.909-1.847-1.849-4.305-2.868-6.917-2.869-5.44 0-9.856 4.37-9.86 9.756-.001 1.83.5 3.578 1.448 5.11L1.815 22.394l4.832-1.24zM16.712 13.3c-.304-.152-1.799-.886-2.053-.979-.254-.092-.44-.139-.626.139-.186.279-.72.886-.882 1.071-.162.186-.324.208-.628.056-.303-.152-1.282-.472-2.442-1.506-.902-.804-1.511-1.797-1.688-2.099-.177-.302-.019-.465.133-.616.137-.136.304-.354.456-.531.152-.177.203-.295.304-.493.101-.198.051-.371-.025-.526-.076-.153-.626-1.506-.857-2.064-.225-.542-.452-.468-.621-.477-.16-.008-.344-.01-.528-.01-.184 0-.485.069-.739.347-.254.278-.971.949-.971 2.314 0 1.365.993 2.686 1.134 2.876.141.189 1.953 2.981 4.731 4.177.661.285 1.177.455 1.58.582.664.211 1.269.181 1.747.11.533-.079 1.799-.734 2.053-1.443.254-.709.254-1.316.178-1.443-.076-.127-.272-.203-.576-.355z"/>
          </svg>
        </div>
      </a>

      {/* ESTILOS INTERNOS */}
      <style jsx>{`
        .animate-fade { animation: fade1 18s infinite; }
        .animate-fade2 { animation: fade2 18s infinite; }
        .animate-fade3 { animation: fade3 18s infinite; }
        @keyframes fade1 { 0%, 30% { opacity: 1; } 33%, 100% { opacity: 0; } }
        @keyframes fade2 { 0%, 30% { opacity: 0; } 33%, 63% { opacity: 1; } 66%, 100% { opacity: 0; } }
        @keyframes fade3 { 0%, 63% { opacity: 0; } 66%, 96% { opacity: 1; } 100% { opacity: 0; } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>

    </div>
  )
}