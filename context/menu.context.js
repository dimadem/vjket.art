import { createContext } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ disciplines, years, children }) => {
  // console.log("MENU CONTEXT PROVIDER", disciplines);
  // console.log("MENU CONTEXT PROVIDER", years);
  // console.log("MENU CONTEXT PROVIDER", children);

  // update menu
  // const [menuState, setMenuState] = useState({ disciplines, years });
  // console.log("MENUSTATE:", menuState);
  // const setMenu = () => {
  //   setMenuState({ disciplines, years });
  // };
  return (
    <MenuContext.Provider value={{ disciplines, years }}>
      {children}
    </MenuContext.Provider>
  );
};
