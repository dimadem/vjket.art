import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ disciplines, years, children }) => {
  // console.log("MENU CONTEXT PROVIDER", disciplines);
  // console.log("MENU CONTEXT PROVIDER", years);
  // console.log("MENU CONTEXT PROVIDER", children);

  // const [menuState, setMenuState] = useState({ disciplines });
  // const setMenu = () => {
  //   setMenuState({ disciplines });
  // };
  return (
    <MenuContext.Provider value={{ disciplines, years }}>
      {children}
    </MenuContext.Provider>
  );
};
