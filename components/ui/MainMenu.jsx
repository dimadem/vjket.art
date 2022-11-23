import { Menu } from "@headlessui/react";
import { BsList } from "react-icons/bs";
import Link from "next/link";
import { disciplines, years } from "../../public/data";
import { BsVimeo, BsFacebook } from "react-icons/bs";
import { ImSoundcloud } from "react-icons/im";

export default function MainMenu() {
  return (
    <Menu>
      <Menu.Button className="sidebar-icon group">
        <BsList size="40" />
        <span className="sidebar-tooltip group-hover:scale-100">menu</span>
      </Menu.Button>
      <Menu.Items className="absolute z-10 ml-16 pt-14 pb-3 w-56 h-screen font-redhatmono font-thin text-lg bg-black outline-none dark:bg-white">
        <div className="flex flex-col h-full">
          {/* home */}
          <Menu.Item
            className="
              text-xl
              font-bold
              cursor-default 
              select-none 
              py-2 px-3
              ui-not-active:text-white 
              ui-not-active:dark:text-black 
              ui-active:bg-white
              ui-active:text-black 
              ui-active:dark:bg-black 
              ui-active:dark:text-neutralWhite"
          >
            <Link href="/">home</Link>
          </Menu.Item>
          {/* about me */}
          <Menu.Item
            className="
              text-xl
              font-bold
              cursor-default 
              select-none 
              py-2 px-3
              ui-not-active:text-white 
              ui-not-active:dark:text-black 
              ui-active:bg-white
              ui-active:text-black 
              ui-active:dark:bg-black 
              ui-active:dark:text-neutralWhite"
          >
            <Link href="/aboutme">about me</Link>
          </Menu.Item>
          {/* menu */}
          {disciplines.map(({ label, href }) => (
            <Menu.Item
              key={label}
              className="
            text-xl
            cursor-default 
            select-none 
            py-2 px-1
            ui-not-active:text-white 
            ui-not-active:dark:text-black 
            ui-active:bg-white
            ui-active:text-black 
            ui-active:dark:bg-black 
            ui-active:dark:text-neutralWhite"
            >
              <Link href={href}>{label}</Link>
            </Menu.Item>
          ))}
          {/* years */}
          <div className="relative pl-5 pr-8 flex flex-nowrap mt-8">
            <div className="flex overflow-y-auto scrollbar-hide">
              {years.map((year) => (
                <Menu.Item
                  key={year.label}
                  className="
                  text-lg
                cursor-default 
                select-none 
                px-1 
                ui-not-active:text-white
                ui-not-active:dark:text-black
                ui-active:bg-white 
                ui-active:text-black 
                ui-active:dark:bg-black 
                ui-active:dark:text-neutralWhite"
                >
                  <Link
                    href={{
                      pathname: "/year/[slug]",
                      query: { slug: year.slug },
                    }}
                  >
                    {year.label}
                  </Link>
                </Menu.Item>
              ))}
            </div>
          </div>
          {/* socials */}
          <div className="relative flex justify-evenly mt-auto">
            <Menu.Item
              className="
            cursor-default 
            select-none 
            p-2 
            ui-not-active:text-white 
            ui-not-active:dark:text-black
            ui-active:bg-white 
            ui-active:text-black 
            ui-active:dark:bg-black 
            ui-active:dark:text-neutralWhite"
            >
              <Link href="https://vimeo.com/vjket">
                <BsVimeo />
              </Link>
            </Menu.Item>
            <Menu.Item
              className="
            cursor-default 
            select-none 
            p-2 
            ui-not-active:text-white 
            ui-not-active:dark:text-black
            ui-active:bg-white 
            ui-active:text-black 
            ui-active:dark:bg-black 
            ui-active:dark:text-neutralWhite"
            >
              <Link href="https://www.facebook.com/VJkET">
                <BsFacebook />
              </Link>
            </Menu.Item>
            <Menu.Item
              className="
            cursor-default 
            select-none 
            p-2 
            ui-not-active:text-white 
            ui-not-active:dark:text-black
            ui-active:bg-white 
            ui-active:text-black 
            ui-active:dark:bg-black 
            ui-active:dark:text-neutralWhite"
            >
              <Link href="https://soundcloud.com/ms-upbringer">
                <ImSoundcloud />
              </Link>
            </Menu.Item>
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}
