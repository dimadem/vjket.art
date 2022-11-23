import { BsCaretDownFill } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";

export default function ShowDescriptionButton() {
  return (
    <Disclosure.Button
      className="
    h-min 
    ml-auto 
    mr-7 
    ui-open:rotate-180 
    ui-open:transform
    "
    >
      {<BsCaretDownFill size={30} />}
    </Disclosure.Button>
  );
}
