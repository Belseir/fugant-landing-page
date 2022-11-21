import "./index";
import Logo from "./components/Logo";
import MainSection from "./components/MainSection";
import ProductSection from "./components/ProductSection";
import useIsInViewport from "./hooks/useIsInViewport";
import { useRef } from "react";

export default function App() {
  const headingRef = useRef() as React.MutableRefObject<HTMLHeadingElement>;
  const { visible } = useIsInViewport(headingRef);

  return (
    <div className="font-poppins snap-y w-screen h-screen snap-proximity overflow-scroll overflow-x-hidden">
      <Logo opacity={visible ? undefined : 0.1} />
      <MainSection ref={headingRef} />
      <ProductSection />
    </div>
  );
}
