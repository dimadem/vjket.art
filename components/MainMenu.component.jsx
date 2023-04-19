import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "../context/menu.context";
import { Popover } from "@headlessui/react";
import LogoLink from "./ui/LogoLink";
import { BsList } from "react-icons/bs";
import { BsVimeo, BsFacebook } from "react-icons/bs";
import { ImSoundcloud } from "react-icons/im";

export default function MainMenu() {
  const { menu, setMenu } = useContext(MenuContext);
  const { disciplines, years } = menu;

  return (
    <Popover>
      <Popover.Button className="sidebar-icon group">
        <BsList size="40" />
        {/* <span className="sidebar-tooltip group-hover:scale-100">menu</span> */}
      </Popover.Button>
      <Popover.Panel
        className="
      absolute 
      z-10 
      p-4
      sm:top-0 
      sm:ml-16 
      sm:w-56 
      w-full 
      sm:h-full 
      h-screen 
      font-redhatmono 
      outline-none 
      bg-black 
      dark:bg-white"
      >
        <div className="flex flex-col h-full ml-2 sm:ml-0 sm:p-0 overflow-hidden">
          <div className="flex flex-col h-full overflow-x-auto scrollbar-hide overscroll-contain">
            <div className="flex flex-col justify-start sm:mt-10">
              {/* home */}
              <Popover.Button
                as={Link}
                href="/"
                className="text-xl font-bold p-2 menuItem"
              >
                home
              </Popover.Button>
              {/* about me */}
              <Popover.Button
                as={Link}
                href="/aboutme"
                className="text-xl font-bold p-2 menuItem"
              >
                about me
              </Popover.Button>
              {/* menu */}
              {disciplines &&
                disciplines.map(({ slug, title, _id }) => (
                  <Popover.Button
                    key={_id}
                    as={Link}
                    href={`/discipline/${slug}`}
                    className="text-xl py-2 px-1 menuItem"
                  >
                    {title}
                  </Popover.Button>
                ))}
              {/* years */}
              <div className="flex flex-nowrap mt-14 sm:mt-8 sm:pl-3 sm:pr-8">
                <div className="flex overflow-y-auto scrollbar-hide overscroll-contain">
                  {years &&
                    years.map(({ slug, title, _id }) => (
                      <Popover.Button
                        as={Link}
                        key={_id}
                        className="text-lg font-medium px-2 menuItem"
                        href={`/year/${slug}`}
                      >
                        {title}
                      </Popover.Button>
                    ))}
                </div>
              </div>
            </div>
            {/* socials */}
            <div className="relative flex justify-evenly mt-auto">
              <Popover.Button
                as={Link}
                className="p-2 menuItem"
                href="https://vimeo.com/vjket"
              >
                <BsVimeo />
              </Popover.Button>

              <Popover.Button
                as={Link}
                className="p-2 menuItem"
                href="https://www.facebook.com/VJkET"
              >
                <BsFacebook />
              </Popover.Button>

              <Popover.Button
                as={Link}
                className="p-2 menuItem"
                href="https://soundcloud.com/vjket"
              >
                <ImSoundcloud />
              </Popover.Button>
            </div>
            {/* logo */}
            <div className="relative flex justify-center text-white p-2">
              <span className="flex items-center text-end p-2 dark:invert">
                made by
              </span>
              <LogoLink />
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
