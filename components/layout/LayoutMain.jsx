import { MenuContextProvider } from "../../context/menu.context";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};
export const withLayoutMain = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <MenuContextProvider disciplines={props.disciplines} years={props.years}>
        <Layout>
          <Component {...props} />
        </Layout>
      </MenuContextProvider>
    );
  };
};
