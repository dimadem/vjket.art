import { useEffect, useState } from "react";
import { useResize } from "../hooks/useResize.hook";
import SideBar from "../components/Sidebar.component";
import { Transition } from "@headlessui/react";

const Layout = ({ children }) => {
  const [resize, setResize] = useState({ width: Number, height: Number });
  useEffect(() => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useResize(setResize);

  if (resize.width >= 640) {
    return (
      <div className="flex flex-row select-none">
        <SideBar />
        {children}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col select-none">
        <SideBar />
        {children}
      </div>
    );
  }
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
