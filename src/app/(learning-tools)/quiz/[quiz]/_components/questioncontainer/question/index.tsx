import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function Question({ show, btn, children }: any) {
  const window = useWindowDimensions();
  const isMobile = window.width < 768;

  return (
    <div
      style={
        isMobile ? { height: `calc(100vh - ${btn}px)` } : { height: "100vh" }
      }
      className={`flex flex-col max-md:mt-10 max-md:absolute z-0 max-md:left-0 w-[100%] ${
        show === false ? "max-md:flex" : "max-md:hidden"
      }`}
    >
      {children}
    </div>
  );
}
