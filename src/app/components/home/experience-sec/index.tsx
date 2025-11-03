import React from 'react';

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2025 - Presente",
      title: " Proyecto UrbiX",
      company: "urbi-x.com",
      type: "Proyecto académico",
      description:
        "Desarrollo de la plataforma de reportes ciudadanos Urbix, usando tecnologías como Vue.js, Node.js, Express y MySQL, integrando Leaflet.js para mapas, geolocalización automática, APIs REST y autenticación JWT. El objetivo es empoderar a los usuarios para reportar incidencias urbanas de manera anónima.",
    },
    {
      year: "2024",
      title: "Desarrollo de aplicaciones en redes",
      company: "Redes 2 (Aplicaciones)",
      type: "Prácticas académicas",
      description:
        "Diseño e implementación de aplicaciones cliente-servidor en Java para comunicación en red utilizando UDP/TCP, con manejo de flujo y confiabilidad (Go-Back-N). Incluyó transmisión de archivos, audio streaming y análisis de QoS.",
    },
    {
      year: "2023 - 2024",
      title: "Programación en C con Compiladores",
      company: "Compiladores - ESCOM IPN",
      type: "Prácticas académicas",
      description:
        "Diseño y construcción de intérpretes y compiladores básicos usando lex/yacc (BYACC) en C. Se implementaron analizadores sintácticos para cálculos vectoriales, comandos gráficos y automatización de pruebas.",
    },
    {
      year: "2025",
      title: "Ciberseguridad & Criptografía Aplicada",
      company: "ESCOM IPN / Coursera",
      type: "Cursos y prácticas",
      description:
        "Estudio de técnicas de cifrado como AES en modo ECB/CBC/CFB/OFB, implementación de herramientas criptográficas en Java, manejo de claves, padding, y vulnerabilidades comunes. Participación en curso de Introducción a Ciberseguridad por Coursera.",
    }
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experiencia</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                <div>
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className="relative">
                  {index < experiences.length && (
                    <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div className={`w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'}`}>
                      {index === 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">{exp.company}</span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
