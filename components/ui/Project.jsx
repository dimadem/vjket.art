import { Disclosure } from "@headlessui/react";
import ShowDescriptionButton from "../ui/DescriptionButton";
import Image from "next/image";
import { useImageProps } from "../../lib/next-sanity-image";
import { PortableText } from "@portabletext/react";
import Vimeo from "@u-wave/react-vimeo";

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
  gallery /* CAROUSEL IMAGES */,
}) {
  const ImageComponent = (description) => {
    return (
      <div className="flex">
        <Image
          {...useImageProps(description.value)}
          layout="responsive"
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
          alt="Project Image"
          className="inline justify-center my-4"
        />
      </div>
    );
  };

  const VimeoComponent = (description) => {
    return (
      <Vimeo
        className="flex justify-center bg-black p-2 my-4"
        id={description.value._key}
        video={description.value.url}
      />
    );
  };

  const components = {
    types: {
      image: ImageComponent,
      vimeo: VimeoComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  };

  // Get the image props from the image object
  const mainImageProps = useImageProps(mainImage);

  if (!Project) return <div />;
  return (
    <div
      key={_id}
      className="
    flex 
    flex-col 
    justify-start
    items-stretch
    mx-3 
    font-redhatmono

    "
    >
      <div
        className="
      flex
      flex-row 
      justify-between
      align-top
      pt-6
      "
      >
        <div
          className="
          flex-col
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
          flex
          flex-col
          justify-end 
          w-full"
        >
          <div
            className="
            flex
            h-min
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
          {...mainImageProps}
          layout="responsive"
          sizes="(max-width: 500px) 100vw, 300px"
          alt="Project mainImage"
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
            <PortableText
              className="
              text-justify 
              w-fit
              "
              value={description}
              components={components}
            />

            <PortableText
              className="
              text-left 
              w-full
              "
              value={credits}
            />
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}
