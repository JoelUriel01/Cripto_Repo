"use client";
import Swal from "sweetalert2";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <div>
              <Logo />
            </div>

            <a
              href="/Curriculum.pdf"
              download="CV-Joel-Ramales.pdf"
              className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
            >
              <span className="relative z-10 text-xl font-medium text-black group-hover:text-black transition-colors duration-300">
                Descarga mi CV
              </span>
            </a>
<button
  onClick={() =>
    Swal.fire({
      icon: "info",
      title: "🔐 Próximamente",
      text: "Esta función aún no está implementada.",
      confirmButtonText: "Entendido",
      customClass: {
    confirmButton: "no-hover-effect",
  },
    })
  }
  className="relative overflow-hidden px-6 py-3 border-2 border-gray-800 rounded-full bg-white text-black before:!hidden hover:bg-white hover:text-black"
>
  Mi llave pública
</button>



          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
