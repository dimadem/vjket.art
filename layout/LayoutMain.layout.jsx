import Sidebar from "../components/SideBar.component";
import { useState } from "react";
import { useResize } from "../hooks/useResize.hook";

const Layout = ({ children }) => {
  const [resize, setResize] = useState({ width: undefined, height: undefined });
  useResize(setResize);

  return (
    <>
      {resize.width > 640 ? (
        <div className="flex flex-row w-full h-screen">
          <Sidebar />
          {children}
        </div>
      ) : (
        <div className="flex flex-col w-full h-screen md:hidden">
          <Sidebar />
          {children}
        </div>
      )}
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
