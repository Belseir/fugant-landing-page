import Logo from "./components/Logo";
import MainSection from "./components/MainSection";
import ProductSection from "./components/ProductSection";
import useIsInViewport from "./hooks/useIsInViewport";
import { useRef } from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ContactSection from "./components/ContactSection";

export default function App() {
  const headingRef = useRef() as React.MutableRefObject<HTMLHeadingElement>;
  const topRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { visible: headingVisible } = useIsInViewport(headingRef);

  return (
    <div className="font-poppins w-screen h-screen overflow-scroll overflow-x-hidden">
      <div
        ref={topRef}
        className="relative top-0 left-0 w-full h-[1px] opacity-0"
      >
        Scroll Pivot - IGNORE
      </div>
      <Logo opacity={headingVisible ? undefined : 0.1} />
      <MainSection ref={headingRef} />
      <ProductSection />
      <ContactSection />
      <ScrollToTopButton enabled={!headingVisible} topRef={topRef} />
    </div>
  );
}
