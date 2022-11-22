import Button from "./Button";
import render from "../assets/render.png";
import { forwardRef } from "react";

const MainSection = forwardRef<HTMLHeadingElement>((_, ref) => {
  const openInstagram = () => {
    window.open("https://www.instagram.com/fugant2022/", "_blank");
  };

  return (
    <section className="snap-center w-full h-screen">
      <div className="flex flex-col justify-between px-[50px] py-[4.5rem] lg:py-[9rem] h-full p-4">
        <div className="flex flex-col gap-5">
          <h1
            ref={ref}
            className="text-5xl z-10 sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white "
          >
            Fugant:{" "}
            <span className="text-[16px] sm:text-lg md:text-2xl">
              Te protegemos de lo invisible
            </span>
          </h1>
          <p className="text-[#9D9D9D] z-10 sm:px-4 text-xs lg:w-[37rem] xl:w-[43rem] sm:text-lg lg:text-xl xl:text-2xl lg:leading-[40px] xl:leading-10 font-normal leading-5">
            Las fugas de gas son mucho más comunes de lo que crees, detectalas a
            tiempo y evita accidentes con Fugant.
          </p>
        </div>

        <img
          src={render}
          className="lg:relative lg:translate-x-2/3 lg:-right-0 self-center lg:top-[10rem] lg:-translate-y-1/2 w-1/2 lg:w-[50rem] drop-shadow-lg"
          alt="Producto de Fugant"
        />

        <div className="flex flex-col z-10 gap-5 px-4 lg:-mt-[25rem] items-center lg:w-[38rem]">
          <p className="text-center md:text-left text-[#D9D9D9] text-xs sm:text-lg lg:text-xl xl:text-2xl">
            No esperes, con Fugant podrás actuar antes de que suceda. Por tan
            solo
            <span className="text-[#2FA9F0]"> $6864.00</span>
          </p>
          <Button
            content="Adquiere Fugant"
            className="text-white"
            onClick={openInstagram}
          />
        </div>
      </div>
    </section>
  );
});

export default MainSection;
