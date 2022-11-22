import Feature from "./Feature";
import ModelDisplay from "./ModelDisplay";

const ProductSection = () => {
  return (
    <section className="snap-center h-screen flex lg:flex-row flex-col items-center p-3 justify-around">
      <ModelDisplay />
      <div className="relative flex flex-col p-4 sm:w-[38rem] xl:mr-[10rem] mr-0">
        <h2 className="text-white font-bold lg:text-[56px] text-3xl lg:w-[63rem]">
          Fugant
        </h2>
        <p className="px-6 pt-8 text-[#D9D9D9] sm:text-xl font-light md:text-2xl sm:leading-10 md:leading-[40px] leading-9 lg:w-[35rem]">
          El dispositivo es totalmente configurable mediante un portal web. Al
          momento de detectar gas en su hogar se le notificará a su celular.
        </p>
        <div className="flex flex-col px-6 pt-8 gap-5">
          <Feature icon="mdi:mixer-settings">Configurable</Feature>
          <Feature icon="material-symbols:notification-important-sharp">
            Notificaciones Moviles
          </Feature>
          <Feature icon="bxs:wrench">Facil Instalacion</Feature>
          <Feature icon="ph:ruler-fill">
            64<span className="text-lg">mm</span> X 48
            <span className="text-lg">mm</span> X 44
            <span className="text-lg">mm</span>
          </Feature>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
