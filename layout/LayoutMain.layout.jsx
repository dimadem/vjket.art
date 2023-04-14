import SideBar from "../components/SideBar.component";
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
        <div className="flex flex-row w-full h-screen">
          <SideBar />
          {children}
        </div>
      ) : (
        <div className="flex flex-col w-full h-screen md:hidden">
          <SideBar />
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
