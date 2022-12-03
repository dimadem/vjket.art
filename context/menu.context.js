import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ disciplines, years, children }) => {
  console.log("MENU CONTEXT PROVIDER DISCIPLINES:", disciplines);
  console.log("MENU CONTEXT PROVIDER YEARS:", years);
  // console.log("MENU CONTEXT PROVIDER CHILDREN", children);

  // update menu
  const [menuState, setMenuState] = useState({ disciplines, years });
  const setMenu = () => {
    setMenuState({ disciplines, years });
  };
  return (
    <MenuContext.Provider value={{ menu: menuState, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
