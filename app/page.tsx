'use client'

import { useState } from 'react'

export default function MickyCanceleriaJapandi() {
  const [menuOpen, setMenuOpen] = useState(false)

  const gallery = [
    '/galeria1.jpg',
    '/galeria2.jpg',
    '/galeria3.jpg',
    '/galeria4.jpg',
    '/galeria5.jpg',
    '/galeria6.jpg',
  ]

  return (
    <div className="bg-[#f6f1ea] text-[#2f2a24] min-h-screen overflow-x-hidden font-sans">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f6f1ea]/90 backdrop-blur-xl border-b border-[#d8cfc2]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Micky Cancelería"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-[#6d6256]">
            <a href="#servicios" className="hover:text-black transition">
              Servicios
            </a>

            <a href="#galeria" className="hover:text-black transition">
              Galería
            </a>

            <a href="#contacto" className="hover:text-black transition">
              Contacto
            </a>
          </nav>

          {/* BOTON HAMBURGUESA */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-[#2f2a24]" />
            <span className="w-6 h-[2px] bg-[#2f2a24]" />
            <span className="w-6 h-[2px] bg-[#2f2a24]" />
          </button>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div className="md:hidden bg-[#f6f1ea] border-t border-[#d8cfc2]">
            <nav className="flex flex-col px-6 py-6 gap-5 uppercase tracking-[0.2em] text-sm text-[#6d6256]">

              <a
                href="#servicios"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </a>

              <a
                href="#galeria"
                onClick={() => setMenuOpen(false)}
              >
                Galería
              </a>

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-20 bg-[#f6f1ea]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">

            {/* SLIDER */}
            <div className="relative min-h-[420px] lg:min-h-full overflow-hidden rounded-[40px] shadow-2xl">

              {/* IMAGE 1 */}
              <div className="absolute inset-0 animate-fade">
                <img
                  src="/hero1.jpg"
                  alt="Ventanas premium"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE 2 */}
              <div className="absolute inset-0 animate-fade2">
                <img
                  src="/hero2.jpg"
                  alt="Diseño premium"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* IMAGE 3 */}
              <div className="absolute inset-0 animate-fade3">
                <img
                  src="/hero3.jpg"
                  alt="Cancelería moderna"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* TEXTO */}
            <div className="flex flex-col justify-center bg-[#fffaf5] rounded-[40px] p-8 md:p-14 border border-[#e7ded3]">

              <span className="uppercase tracking-[0.35em] text-sm text-[#9a8672]">
                Cancelería que transforma espacios
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[0.95] font-light mt-6 mb-6">
                Elegancia,
                <br />
                luz y
                <br />
                perfección
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-[#5e5448] max-w-xl mb-10">
                Diseñamos e instalamos canceles de aluminio a la medida
                con acabados premium que elevan cada ambiente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/525514403045"
                  className="bg-[#b29b84] text-white px-8 py-4 rounded-2xl tracking-wide hover:scale-105 transition duration-300 text-center"
                >
                  Cotiza tu proyecto
                </a>

                <a
                  href="#galeria"
                  className="border border-[#bcae9f] px-8 py-4 rounded-2xl hover:bg-[#ebe2d7] transition duration-300 text-center"
                >
                  Ver proyectos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.3em] text-[#8d8174] text-sm">
              Servicios
            </span>

            <h3 className="text-4xl md:text-5xl font-semibold mt-5 mb-6">
              Diseño funcional y atemporal
            </h3>

            <p className="text-[#6d6256] text-lg max-w-3xl mx-auto leading-relaxed">
              Creamos soluciones elegantes que combinan estética
              minimalista con materiales de alta calidad.
            </p>
          </div>

          {/* TARJETAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-[#fffaf5] p-6 rounded-[30px] border border-[#e7ded3] hover:shadow-xl transition duration-500">
              <img
                src="/image1.png"
                alt="Puertas y ventanas"
                className="rounded-[24px] mb-6 w-full h-[320px] object-cover"
              />

              <span className="text-sm uppercase tracking-[0.2em] text-[#8d8174]">
                Puertas y ventanas
              </span>

              <h4 className="text-3xl font-light leading-tight mt-4 mb-4">
                Más luz y amplitud
              </h4>

              <p className="text-[#6d6256] leading-relaxed">
                Diseños minimalistas que conectan tus espacios con el exterior.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#fffaf5] p-6 rounded-[30px] border border-[#e7ded3] hover:shadow-xl transition duration-500">
              <img
                src="/image2.png"
                alt="Diseños personalizados"
                className="rounded-[24px] mb-6 w-full h-[320px] object-cover"
              />

              <span className="text-sm uppercase tracking-[0.2em] text-[#8d8174]">
                Diseños personalizados
              </span>

              <h4 className="text-3xl font-light leading-tight mt-4 mb-4">
                Soluciones únicas
              </h4>

              <p className="text-[#6d6256] leading-relaxed">
                Creamos canceles a medida adaptados a tu estilo y arquitectura.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#fffaf5] p-6 rounded-[30px] border border-[#e7ded3] hover:shadow-xl transition duration-500">
              <img
                src="/image3.png"
                alt="Canceles modernos"
                className="rounded-[24px] mb-6 w-full h-[320px] object-cover"
              />

              <span className="text-sm uppercase tracking-[0.2em] text-[#8d8174]">
                Canceles modernos
              </span>

              <h4 className="text-3xl font-light leading-tight mt-4 mb-4">
                Estética premium
              </h4>

              <p className="text-[#6d6256] leading-relaxed">
                Materiales de alta calidad con acabados elegantes y contemporáneos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 bg-[#efe7dc]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.3em] text-[#8d8174] text-sm">
              Galería
            </span>

            <h3 className="text-4xl md:text-5xl font-semibold mt-5 mb-6">
              Inspiración y detalles
            </h3>

            <p className="text-[#6d6256] text-lg max-w-3xl mx-auto leading-relaxed">
              Una colección de espacios modernos con acabados minimalistas y sofisticados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[28px] bg-white shadow-sm hover:shadow-2xl transition duration-500"
              >
                <img
                  src={image}
                  alt={`Proyecto ${index + 1}`}
                  className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="py-28 bg-[#f8f4ee]">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.3em] text-[#8d8174] text-sm">
              Solicita información
            </span>

            <h3 className="text-4xl md:text-5xl font-semibold mt-5 mb-6">
              Cuéntanos sobre tu proyecto
            </h3>

            <p className="text-[#6d6256] text-lg leading-relaxed max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo.
            </p>
          </div>

          <form
            action="https://formsubmit.co/solucionescailc@gmail.com"
            method="POST"
            className="bg-white rounded-[35px] p-8 md:p-12 shadow-sm border border-[#e7ded3]"
          >

            <input type="hidden" name="_captcha" value="false" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <input
                type="text"
                name="nombre"
                required
                placeholder="Nombre"
                className="w-full border border-[#d8cfc2] rounded-2xl px-5 py-4 bg-[#fdfbf8]"
              />

              <input
                type="tel"
                name="telefono"
                required
                placeholder="Teléfono"
                className="w-full border border-[#d8cfc2] rounded-2xl px-5 py-4 bg-[#fdfbf8]"
              />
            </div>

            <input
              type="email"
              name="email"
              required
              placeholder="Correo electrónico"
              className="w-full border border-[#d8cfc2] rounded-2xl px-5 py-4 bg-[#fdfbf8] mb-6"
            />

            <textarea
              name="mensaje"
              rows={6}
              required
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full border border-[#d8cfc2] rounded-2xl px-5 py-4 bg-[#fdfbf8] mb-8"
            />

            <button
              type="submit"
              className="w-full bg-[#2f2a24] text-white py-5 rounded-2xl text-lg hover:scale-[1.01] transition duration-300"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-[#d8cfc2] bg-[#f6f1ea]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Micky Cancelería"
              className="h-14 w-auto object-contain"
            />
          </div>

          <div className="flex gap-8 uppercase text-sm tracking-[0.2em] text-[#7a6f63]">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/525514403045"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.82.735 5.575 2.132 8.003L0 32l7.84-2.058a15.93 15.93 0 0 0 8.16 2.238c8.836 0 16-7.164 16-16S24.836.396 16 .396z"/>
        </svg>
      </a>

      {/* ANIMACIONES */}
      <style jsx>{`
        .animate-fade {
          animation: fade1 15s infinite;
        }

        .animate-fade2 {
          animation: fade2 15s infinite;
        }

        .animate-fade3 {
          animation: fade3 15s infinite;
        }

        @keyframes fade1 {
          0%, 33% {
            opacity: 1;
          }
          34%, 100% {
            opacity: 0;
          }
        }

        @keyframes fade2 {
          0%, 33% {
            opacity: 0;
          }
          34%, 66% {
            opacity: 1;
          }
          67%, 100% {
            opacity: 0;
          }
        }

        @keyframes fade3 {
          0%, 66% {
            opacity: 0;
          }
          67%, 100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}