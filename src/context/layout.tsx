import { ILayoutContext, LayoutEnum } from "@/lib/interface/layout";
import { ReactNode, createContext, useContext, useState } from "react";

const layoutContext = createContext<ILayoutContext>({
  layout: LayoutEnum.Admin,
  setLayout: () => {},
});

export default function LayoutContext({ children }: { children: ReactNode }) {
  const [activeLayout, setActiveLayout] = useState<LayoutEnum>(LayoutEnum.Admin);

  const updateLayout = (layout: LayoutEnum) => {
    setActiveLayout(layout);
  };

  const value: ILayoutContext = { layout: activeLayout, setLayout: updateLayout };

  return <layoutContext.Provider value={value}>{children}</layoutContext.Provider>;
}

const useLayoutContext = () => useContext(layoutContext);
export { useLayoutContext };
