import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>Joel  Ramales </h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h2>Ingeniero en sistemas computacionales</h2>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
  Soy estudiante de Ingeniería en Sistemas Computacionales con interés en el desarrollo web, ciberseguridad y computación en la nube. <br></br>
  He trabajado en proyectos como UrbiX, una plataforma de reportes ciudadanos, y tengo experiencia en JavaScript, Node.js, Vue.js y bases de datos MySQL. <br></br>
  Me apasiona crear soluciones tecnológicas con impacto social y seguir aprendiendo sobre programación, redes y seguridad informática.

            </p>
          </div>
          <Image
            src={getImgPath("/images/home/banner/ImageCV.png")}
            alt="ImageCV"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/ImageCV.png")}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
