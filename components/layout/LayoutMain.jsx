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
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
