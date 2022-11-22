import Logo from "./components/Logo";
import MainSection from "./components/MainSection";
import ProductSection from "./components/ProductSection";
import useIsInViewport from "./hooks/useIsInViewport";
import { useRef } from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  const headingRef = useRef() as React.MutableRefObject<HTMLHeadingElement>;
  const { visible: headingVisible } = useIsInViewport(headingRef);

  const scrollToTop = () => {
    headingRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="font-poppins snap-y w-screen h-screen snap-proximity overflow-scroll overflow-x-hidden">
      <Logo opacity={headingVisible ? undefined : 0.1} />
      <MainSection ref={headingRef} />
      <ProductSection />
      <ScrollToTopButton enabled={!headingVisible} onClick={scrollToTop} />
    </div>
  );
}
