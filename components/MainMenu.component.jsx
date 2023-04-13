import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "../context/menu.context";
import { Menu } from "@headlessui/react";
import { BsList } from "react-icons/bs";
import { BsVimeo, BsFacebook } from "react-icons/bs";
import { ImSoundcloud } from "react-icons/im";

export default function MainMenu() {
  const { menu, setMenu } = useContext(MenuContext);
  const { disciplines, years } = menu;

  return (
    <Menu>
      <Menu.Button className="sidebar-icon group">
        <BsList size="40" />
        <span className="sidebar-tooltip group-hover:scale-100">menu</span>
      </Menu.Button>
      <Menu.Items className="absolute z-10 ml-16 pt-14 pb-3 w-56 h-full font-redhatmono outline-none bg-black dark:bg-white">
        <div className="flex flex-col justify-start h-full">
          {/* home */}
          <Menu.Item className="text-xl font-bold py-2 px-3 menuItem">
            <Link href="/">home</Link>
          </Menu.Item>
          {/* about me */}
          <Menu.Item className="text-xl font-bold py-2 px-3 menuItem">
            <Link href="/aboutme">about me</Link>
          </Menu.Item>
          {/* menu */}
          {disciplines &&
            disciplines.map(({ slug, title, _id }) => (
              <Menu.Item key={_id} className="text-xl py-2 px-1 menuItem">
                <Link href={`/discipline/${slug}`}>{title}</Link>
              </Menu.Item>
            ))}
          {/* years */}
          <div className="pl-5 pr-8 flex flex-nowrap mt-8">
            <div className="flex overflow-y-auto scrollbar-hide overscroll-contain">
              {years &&
                years.map(({ slug, title, _id }) => (
                  <Menu.Item key={_id} className="text-lg px-2 menuItem">
                    <Link href={`/year/${slug}`}>{title}</Link>
                  </Menu.Item>
                ))}
            </div>
          </div>
          {/* socials */}
          <div className="relative flex justify-evenly mt-auto">
            <Menu.Item className="p-2 menuItem">
              <Link href="https://vimeo.com/vjket">
                <BsVimeo />
              </Link>
            </Menu.Item>
            <Menu.Item className="p-2 menuItem">
              <Link href="https://www.facebook.com/VJkET">
                <BsFacebook />
              </Link>
            </Menu.Item>
            <Menu.Item className="p-2 menuItem">
              <Link href="https://soundcloud.com/vjket">
                <ImSoundcloud />
              </Link>
            </Menu.Item>
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}
