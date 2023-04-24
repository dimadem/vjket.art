import Image from "next/image";
import Link from "next/link";
import logo from "../../public/netart_cube_logo.svg";

export default function LogoLink() {
  return (
    <div className="flex invert dark:invert-0 hover:bg-neutralWhite hover:invert-0 hover:dark:bg-neutralWhite ease-linearcursor-pointer">
      <Link href="https://www.netart.live" target="_blank">
        <Image className="" src={logo} alt="netart" width={30} height={30} />
      </Link>
    </div>
  );
}
