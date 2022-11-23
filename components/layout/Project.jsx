import { Disclosure } from "@headlessui/react";
import ShowDescriptionButton from "../ui/DescriptionButton";
import Image from "next/image";
import { useImageProps } from "../../lib/next-sanity-image";

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
  // Get the image props from the image object
  const imageProps = useImageProps(mainImage);

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
        <Image
          className="
           w-fit 
           h-52 
           left-0 
           aspect-video 
           bg-neutralBlack
           dark:bg-neutralWhite
           "
          src={imageProps.src}
          loader={imageProps.loader}
          width={imageProps.width}
          height={imageProps.height}
          alt="mainImage"
          priority="true"
        />

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
