import { BsCaretDownFill } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

export default function ShowDescriptionButton() {
  // const [open, setOpen] = useState(false);
  return (
    <Disclosure.Button
      // onClick={() => setOpen(!open)}
      className="h-fit w-fit self-center ml-auto ui-open:rotate-180 ui-open:transform"
    >
      {<BsCaretDownFill size={20} />}
    </Disclosure.Button>
  );
}
