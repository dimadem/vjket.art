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
      <Image
        {...useImageProps(description.value)}
        layout="responsive"
        sizes="(max-width: 768px) 100vw,
        (max-width: 200px) 50vw,
        33vw"
        alt="Project Image"
        className="items-center w-full object-contain px-14 pb-10"
      />
    );
  };

  const VimeoComponent = (description) => {
    return (
      <Vimeo
        className="flex justify-center p-2 my-4"
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

  // const images = gallery.map((image) => {
  //   return image;
  // });
  // console.log(images);

  if (!Project) return <div />;
  return (
    <div
      key={_id}
      className="flex flex-col justify-start mx-3 font-redhatmono w-full h-fit"
    >
      <div className="flex flex-row space-x-2 h-min pb-5">
        <div className="w-1/2">
          <span
            className="
          h-min 
          px-4
          border 
          text-xs 
          font-light 
          bg-neutralWhite
          dark:bg-neutralBlack
          "
          >
            {disciplines}
          </span>
        </div>

        <div
          className="
          w-1/2
          overflow-x-auto
          scrollbar-hide
          overscroll-contain
          "
        >
          <span
            className="
          font-normal 
          text-3xl
          truncate
          "
          >
            {title}
          </span>
        </div>
      </div>

      <div className="flex flex-row space-x-2  items-center">
        <div className="w-1/2 relative">
          <Image
            className="
            rounded-sm
           bg-neutralBlack
           dark:bg-neutralWhite
           "
            {...useImageProps(mainImage)}
            layout="responsive"
            sizes="(max-width: 100px) 100vw, 200px"
            alt="Project mainImage"
            priority="true"
          />
        </div>
        <ul className="w-1/2 flex flex-col justify-between">
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

      <Disclosure>
        <ShowDescriptionButton />
        <Disclosure.Panel
          className="
          mb-4
          w-full
          "
        >
          <PortableText
            className="
              text-justify 
              "
            value={description}
            components={components}
          />

          <PortableText
            className="
              text-left 
              "
            value={credits}
          />
          {/* <div className="overflow-x-auto">
            <Image
              {...useImageProps(
                gallery.map((image) => {
                  return image;
                })
              )}
              className="w-full object-contain"
            />
          </div> */}
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}
