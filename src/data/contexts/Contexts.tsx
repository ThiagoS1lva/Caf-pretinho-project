import { createContext, useRef } from "react";

type contextProps = {
  children: any;
  sectionSobreRef: any;
  buttonSobre: any;
};

const Context = createContext<contextProps | undefined>(undefined);

function Contexts({ children }: contextProps) {
    const sectionSobreRef = useRef<HTMLDivElement>(null);
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
