import SideBar from "../components/Sidebar.component";
import { useEffect, useState } from "react";
import { useResize } from "../hooks/useResize.hook";

const Layout = ({ children }) => {
  const [resize, setResize] = useState({ width: Number, height: Number });
  useEffect(() => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useResize(setResize);

  return (
    <>
      {resize.width > 640 ? (
        <div className="flex flex-row h-screen">
          <SideBar />
          {children}
        </div>
      ) : (
        <div className="flex flex-col">
          <SideBar />
          {children}
        </div>
      )}
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
