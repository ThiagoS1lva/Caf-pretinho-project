import { createContext, useRef } from "react";


const Context = createContext();

function Contexts({ children }) {
    const sectionSobreRef = useRef(null);
  const buttonSobre = () => {
    if (sectionSobreRef.current) {
      sectionSobreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Context.Provider value={{ sectionSobreRef, buttonSobre, children }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Contexts };
