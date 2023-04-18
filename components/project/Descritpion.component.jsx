import { PortableText } from "@portabletext/react";
import Vimeo from "@u-wave/react-vimeo";
import "keen-slider/keen-slider.min.css";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { useResize } from "../../hooks/useResize.hook";
import Gallery from "./Gallery.component";

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
      <div className="flex flex-col gap-2 md:gap-12 p-2">
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
            width="auto"
            height="auto"
            id={soundcloud.url}
            url={soundcloud.url}
          />
        )}
      </div>
      {description && (
        <div className="p-2 text-start mt-2 sm:mt-5">
          <h1 className="font-semibold mb-2 sm:mb-5">Description:</h1>
          <PortableText value={description} components={mainDescription} />
        </div>
      )}
      {/* credits */}
      {credits && (
        <div className="p-2 text-start mt-2 sm:mt-5">
          <h1 className="font-semibold mb-2 sm:mb-5">Credits:</h1>
          <PortableText value={credits} components={creditsDescription} />
        </div>
      )}
      {/* image gallery */}
      {gallery && (
        <div className="p-2 text-start mt-2 sm:mt-5">
          <h1 className="font-semibold mb-2 sm:mb-5">Gallery:</h1>
          <Gallery gallery={gallery} />
        </div>
      )}
    </div>
  );
}
