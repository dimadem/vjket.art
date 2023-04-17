import { PortableText } from "@portabletext/react";
import Vimeo from "@u-wave/react-vimeo";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { useImageProps } from "../../lib/next-sanity-image";
import { useState, useEffect } from "react";
import { useResize } from "../../hooks/useResize.hook";

export default function DescritpionComponent({
  vimeo,
  soundcloud,
  gallery,
  description,
  credits,
}) {
  const [resize, setResize] = useState({ width: Number, height: Number });
  useEffect(() => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useResize(setResize);

  //! GALLERY Component
  const GalleryProps = (image) => useImageProps(image);

  // todo delete this shit
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 3,
        spacing: 10,
      },
    },
    []
  );

  //! MAIN Text
  const mainDescription = {
    block: {
      normal: ({ children }) => (
        <p className="text-justify pt-1 h-fit">{children}</p>
      ),
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

  //! CREDITS Text
  const creditsDescription = {
    block: {
      normal: ({ children }) => (
        <p className="text-left pt-1 h-fit font-extralight">{children}</p>
      ),
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

  return (
    <div className="flex flex-col mt-6">
      {/* vimeo video */}
      {resize.width > 640 ? (
        <div className="flex justify-between gap-2 p-2">
          {vimeo && (
            <Vimeo
              width="auto"
              height="auto"
              className="w-2/3 aspect-video"
              responsive={true}
              id={vimeo.url.split("/").pop()}
              video={vimeo.url}
            />
          )}
          {/* soundcloud audio */}
          {soundcloud && (
            <ReactPlayer
              className="w-auto grayscale"
              width="auto"
              height="auto"
              id={soundcloud.url}
              url={soundcloud.url}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {vimeo && (
            <Vimeo
              className="w-full aspect-video"
              responsive={true}
              id={vimeo.url.split("/").pop()}
              video={vimeo.url}
            />
          )}
          {/* soundcloud audio */}
          {soundcloud && (
            <ReactPlayer
              className="w-full grayscale"
              width="100%"
              height="auto"
              id={soundcloud.url}
              url={soundcloud.url}
            />
          )}
        </div>
      )}
      {description && (
        <div className="p-2 text-start">
          <h1 className="font-semibold">Description:</h1>
          <PortableText value={description} components={mainDescription} />
        </div>
      )}
      {/* credits */}
      {credits && (
        <div className="p-2 text-start">
          <h1 className="font-semibold">Credits:</h1>
          <PortableText value={credits} components={creditsDescription} />
        </div>
      )}
      {/* image gallery */}
      <div ref={sliderRef} className="keen-slider pt-4">
        {gallery &&
          gallery?.images?.map((url, key) => {
            return (
              <Image
                key={key}
                {...GalleryProps(url)}
                alt="Gallery Image"
                className="keen-slider__slide"
              />
            );
          })}
      </div>
    </div>
  );
}
