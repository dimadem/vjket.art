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
        className="flex justify-center p-2 my-2"
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

  // ImgGallery
  const GalleryProps = (image) => useImageProps(image);
  const [sliderRef, instanceRef] = useKeenSlider(
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
      className="flex flex-col h-fit pt-7 justify-start mx-3 font-redhatmono"
    >
      <div className="flex flex-row items-cente pb-5 space-x-2">
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
          text-3xl
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
        <ul className="w-1/2 flex flex-col justify-between">
          <li
            className="
            font-medium 
            text-lg 
            text-neutralBlack
            dark:text-neutralWhite
            tracking-widest
            "
          >
            location
          </li>

          <li
            className="
            font-light 
            text-lg
            text-neutralBlack
            dark:text-neutralWhite
            "
          >
            {location}
          </li>

          <li
            className="
            font-medium 
            text-lg 
            text-neutralBlack
            dark:text-neutralWhite
            tracking-widest
            "
          >
            year
          </li>

          <li
            className="
            font-light 
            text-lg
            text-neutralBlack
            dark:text-neutralWhite
            "
          >
            {date}
          </li>

          <li
            className="
            font-medium 
            text-lg 
            text-neutralBlack
            dark:text-neutralWhite
            tracking-widest
            "
          >
            technologies
          </li>
          <li
            className="
            font-light 
            text-lg
            text-neutralBlack
            dark:text-neutralWhite
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
              whitespace-normal
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
