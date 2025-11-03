"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [contactBar, setContactBar] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBar(data?.contactBar);
      } catch (error) {
        console.error("Error fetching contactBar:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9 pointer-events-none">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>Sobre mí</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  Soy estudiante de Ingeniería en Sistemas Computacionales con enfoque en
                  desarrollo web, ciberseguridad y computación en la nube. He participado en
                  proyectos académicos como UrbiX, donde trabajé con Vue.js, Node.js,
                  Express y MySQL con integración de mapas (Leaflet) y autenticación JWT.
                  Me interesa el análisis de vulnerabilidades, criptografía aplicada y la
                  creación de soluciones tecnológicas con impacto social.
                </p>

                {/* Sección Redes Sociales */}
                <div className="pt-10 flex flex-col gap-5">
                  <h4 className="text-xl font-medium">Encuéntrame en</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    {contactBar?.socialItems?.map((item: any, index: number) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 flex items-center gap-2 bg-white py-2 px-4 rounded-full shadow hover:bg-primary hover:text-white transition"
                      >
                        <Image
                          src={getImgPath(item.icon)}
                          alt={`${item.platform}-icon`}
                          width={20}
                          height={20}
                        />
                        <span>{item.platform}</span>
                      </a>
                    ))}
                  </div>

                  {/* Sección Contacto */}
                  <h4 className="text-xl font-medium mt-6">Contacto directo</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {contactBar?.contactItems?.map((item: any, index: number) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 flex items-center gap-2 bg-white py-2 px-4 w-fit rounded-full shadow hover:bg-primary hover:text-white transition"
                      >
                        <Image
                          src={getImgPath(item.icon)}
                          alt={`${item.type}-icon`}
                          width={20}
                          height={20}
                        />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
