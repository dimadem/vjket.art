import { Disclosure } from "@headlessui/react";
import ShowDescriptionButton from "../ui/DescriptionButton";

export default function Project({
  _id /* string */,
  title /* string */,
  slug /* type: slug, string: slug.current */,
  mainImage /* IMAGE */,
  disciplines /* OBJECT  */,
  date /* YYYY-MM-DD */,
  location /* string */,
  technologies /* OBJECT */,
  description /* OBJECT */,
  credits /* OBJECT */,
}) {
  if (!Project) return <div />;
  return (
    <div
      key={_id}
      className="
    flex 
    flex-col 
    mx-3 
    font-redhatmono
    "
    >
      <div
        className="
      flex 
      flex-row 
      justify-between
      pt-6
      "
      >
        <div
          className="
        w-full 
        h-fit
        mt-3
        "
        >
          <button
            className="
          h-min 
          w-fit 
          px-4
          border 
          text-xs 
          font-light 
          bg-neutralWhite
          dark:bg-neutralBlack
          "
          >
            {disciplines}
          </button>
        </div>
        <div
          className="
        w-full
        max-h-min
        overflow-auto 
        scrollbar-hide
        "
        >
          <p
            className="
          font-normal 
          text-3xl 
          mb-5 
          h-min
          "
          >
            {title}
          </p>
        </div>
      </div>
      <div
        className="
      flex 
      flex-row
      gap-3 
      mb-4
      "
      >
        <div
          className="
        w-full 
        flex 
        flex-row 
        h-52 
        left-0 
        aspect-video 
        bg-neutralBlack
        "
        >
          <img src={mainImage} />
        </div>
        <div
          className="
        flex
        w-full
        "
        >
          <ul
            className="
          flex 
          flex-col 
          justify-between
          "
          >
            <li
              className="
            font-medium 
            text-lg 
            tracking-widest
            "
            >
              location
            </li>

            <li
              className="
            font-light 
            text-lg
            "
            >
              {location}
            </li>

            <li
              className="
            font-medium 
            text-lg 
            tracking-widest
            "
            >
              year
            </li>

            <li
              className="
            font-light 
            text-lg
            "
            >
              {date}
            </li>

            <li
              className="
            font-medium 
            text-lg 
            tracking-widest
            "
            >
              technologies
            </li>
            <li
              className="
            font-light 
            text-lg
            "
            >
              {technologies}
            </li>
          </ul>
        </div>
      </div>
      <Disclosure>
        <ShowDescriptionButton />
        <Disclosure.Panel
          className="
          mb-4
          "
        >
          <div
            className="
            mt-1 
            mx-3
            "
          >
            <p
              className="
              text-justify 
              w-fit
              "
            ></p>
            <p
              className="
              text-left 
              w-full
              "
            >
              {credits}
            </p>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}
