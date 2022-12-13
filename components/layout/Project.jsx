import { Disclosure } from "@headlessui/react";
import ShowDescriptionButton from "../ui/DescriptionButton";
import Image from "next/image";
import { useImageProps } from "../../lib/next-sanity-image";
import { PortableText } from "@portabletext/react";
import Vimeo from "@u-wave/react-vimeo";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

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
      <div className="w-1/2 justify-center py-2 px-1">
        <Image
          {...useImageProps(description.value)}
          style={{ width: "100%", height: "auto" }}
          alt="Project Image"
        />
      </div>
    );
  };

  const VimeoComponent = (description) => {
    return (
      <Vimeo
        className="float-left p-2"
        id={description.value._key}
        video={description.value.url}
      />
    );
  };

  const componentsDescription = {
    types: {
      image: ImageComponent,
      vimeo: VimeoComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    block: {
      normal: ({ children }) => <p className="text-justify pt-1">{children}</p>,
      h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
      h2: ({ children }) => <h2 className="text-xl">{children}</h2>,
    },
    marks: {
      em: ({ children }) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    },
  };

  const componentsCredits = {
    types: {
      image: ImageComponent,
      vimeo: VimeoComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    block: {
      normal: ({ children }) => <p className="text-left pt-1">{children}</p>,
      h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
      h2: ({ children }) => <h2 className="text-xl">{children}</h2>,
    },
    marks: {
      em: ({ children }) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    },
  };

  // ImgGallery
  const GalleryProps = (image) => useImageProps(image);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 2,
        spacing: 15,
      },
    },
    []
  );
  // mainImage
  const imageProps = useImageProps(mainImage);

  if (!Project) return <div />;
  return (
    <div
      key={_id}
      className="flex flex-col h-fit pt-7 justify-start mx-3 my-1 font-redhatmono"
    >
      <div className="flex flex-row items-cente space-x-2 pb-2">
        <div className="w-1/2">
          <span
            className="
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
          text-2xl
          truncate
          "
          >
            {title}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-center items-stretch h-auto space-x-2 w-fit">
        <div className="w-1/2">
          <Image
            className="
            rounded-sm
           bg-neutralBlack
           dark:bg-neutralWhite
           "
            {...imageProps}
            alt="mainImage"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <ul className="w-1/2 flex flex-col justify-around">
          <li
            className="
            font-normal
            text-lg
            text-neutralBlack
            dark:text-white
            tracking-widest
            "
          >
            location
          </li>

          <li
            className="
            font-extralight
            text-neutralBlack
            dark:text-white
            "
          >
            {location}
          </li>

          <li
            className="
            font-normal
            text-lg 
            text-neutralBlack
            dark:text-white
            tracking-widest
            "
          >
            year
          </li>

          <li
            className="
            font-extralight
            text-neutralBlack
            dark:text-white
            "
          >
            {date.slice(0, 4)}
          </li>

          <li
            className="
            font-normal
            text-lg
            text-neutralBlack
            dark:text-white
            tracking-widest
            "
          >
            technologies
          </li>
          <li
            className="
            font-extralight
            text-neutralBlack
            dark:text-white
            "
          >
            {technologies}
          </li>
        </ul>
      </div>

      <Disclosure>
        <ShowDescriptionButton />
        <Disclosure.Panel className="p-4 w-full bg-neutralWhite dark:bg-neutralBlack">
          <PortableText
            value={description}
            components={componentsDescription}
          />
          <PortableText value={credits} components={componentsCredits} />
          <div ref={sliderRef} className="keen-slider pt-4 py-1">
            {gallery &&
              gallery?.images?.map((image, key) => {
                return (
                  <Image
                    key={key}
                    {...GalleryProps(image)}
                    alt="Gallery Image"
                    className="keen-slider__slide"
                  />
                );
              })}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}
