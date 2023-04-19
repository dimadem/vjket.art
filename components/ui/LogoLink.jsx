import Image from "next/image";
import Link from "next/link";
import logo from "../../public/netart_cube_logo.svg";

export default function LogoLink() {
  return (
    <div className="sidebar-icon group">
      <Link href="https://www.netart.live" target="_blank">
        <Image
          className="dark:invert"
          src={logo}
          alt="netart"
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
}
