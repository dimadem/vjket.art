import Sidebar from "../components/Sidebar.component";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      {children}
    </div>
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
