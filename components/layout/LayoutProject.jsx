import Sidebar from "./Sidebar";
import InfoBar from "./InfoBar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
      <InfoBar />
    </>
  );
};
export const withLayoutProject = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
