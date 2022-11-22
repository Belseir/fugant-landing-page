import { Icon } from "@iconify/react";
import { useRef } from "react";

const ScrollToTopButton = ({
  enabled = false,
  topRef,
}: {
  enabled?: boolean;
  topRef: React.MutableRefObject<HTMLDivElement>;
}) => {
  const scrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {enabled && (
        <button
          className="absolute bottom-0  mr-[40px] mb-[20px] right-0 flex flex-row z-30 items-center"
          onClick={scrollToTop}
        >
          <p className="bg-[#102229] text-md w-[10rem] drop-shadow-lg py-1 pl-6 rounded-l-2xl z-20 translate-x-[1rem] text-left text-[#2C5364]">
            Volver Al Inicio
          </p>
          <Icon
            icon="ph:arrow-fat-up-fill"
            className="bg-[#102229] text-[#2C5364] drop-shadow-lg z-30 h-12 w-12 rounded-full p-1"
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
