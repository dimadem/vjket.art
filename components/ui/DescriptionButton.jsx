import { BsCaretDownFill } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";

export default function ShowDescriptionButton() {
  return (
    <Disclosure.Button className="h-fit w-fit self-center ml-auto ui-open:rotate-180 ui-open:transform">
      {<BsCaretDownFill size={20} />}
    </Disclosure.Button>
  );
}
