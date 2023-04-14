import { BsCaretDownFill } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";

export default function ShowDescriptionButton() {
  return (
    // <Disclosure.Button className="w-fit h-fit ui-open:rotate-180 ui-open:transform">
    //   show more {<BsCaretDownFill size={20} />}
    // </Disclosure.Button>
    <Disclosure.Button className="w-fit h-fit opacity-60 ui-open:line-through ui-open:opacity-100 select-none">
      show more
    </Disclosure.Button>
  );
}
