import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function ShowDescriptionButton({ slug }) {
  return (
    <div className="flex justify-between mt-1">
      {slug && <Link href={`/project/${slug}`}>link</Link>}
      <Disclosure.Button className="w-fit h-fit opacity-60 ui-open:line-through ui-open:opacity-100 select-none">
        show more
      </Disclosure.Button>
    </div>
  );
}
