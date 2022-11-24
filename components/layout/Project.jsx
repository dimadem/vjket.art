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
}) {
  // imageData
  const imageData = description.filter(function (images) {
    if (images._type === "image") {
      return true;
    }
  });

  const imageProps = useImageProps(imageData[0]);
  // console.log("ImageProps:", imageProps);

  const imageComponent = () => {
    return (
      <Image
        {...imageProps}
        className="object-cover w-full h-full"
        alt="Project Image"
        layout="responsive"
        sizes="(max-width: 800px) 100vw, 800px"
        priority="true"
      />
    );
  };

  // vimeoProps
  const vimeoProps = description.filter(function (vimeo) {
    if (vimeo._type === "vimeo") {
      return true;
    }
  });

  const vimeoComponent = (vimeoProps) => {
    return (
      <Vimeo
        className="w-full"
        id={vimeoProps.value._key}
        video={vimeoProps.value.url}
      />
    );
  };

  const components = {
    types: {
      image: imageComponent,
      vimeo: vimeoComponent,
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
