import Button from "./Button";

const ContactSection = () => {
  return (
    <section className="snap-center w-full h-screen">
      <div className="flex flex-col text-2xl md:text-5xl items-center text-center text-[#FFFFFF] justify-around px-[50px] py-[4.5rem] lg:py-[9rem] h-full gap-5 p-4">
        <div>
          <p>¿Tiene dudas?</p>
          <p>Mandenos un correo</p>
        </div>
        <form className="flex flex-col items-center gap-10">
          <div className="flex flex-col md:flex-row gap-5">
            <input
              placeholder="Nombre"
              className="bg-[#203A43] text-sm rounded-lg border-2 border-[#2C5364] h-10 w-full px-5 py-3"
            ></input>
            <input
              placeholder="Email"
              className="bg-[#203A43] text-sm rounded-lg border-2 border-[#2C5364] h-10 w-full px-5 py-3"
            ></input>
          </div>
          <textarea
            placeholder="Mensaje"
            className="bg-[#203A43] text-sm rounded-lg border-2 border-[#2C5364] h-[20rem] w-full px-5 py-3 resize-none"
          ></textarea>
          <Button content="Enviar" className="md:self-end w-full md:w-auto" />
        </form>
        <div>
          <p>o</p>
          <p>
            Escribenos al{" "}
            <a
              className="text-[#2FA9F0] font-bold"
              href="https://www.instagram.com/fugant2022/"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
