import { PortableText } from "@portabletext/react";
import { useImageProps } from "next-sanity-image";
import Vimeo from "@u-wave/react-vimeo";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ReactPlayer from "react-player";
import Image from "next/image";

export default function DescritpionComponent({
  description,
  credits,
  gallery,
}) {
  //! IMAGE COMPONENT
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

  //! GALLERY Component
  const GalleryProps = (image) => useImageProps(image);
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

  //! VIMEO COMPONENT
  const VimeoComponent = (description) => {
    return (
      <Vimeo
        className="aspect-video p-2"
        responsive={true}
        id={description.value._key}
        video={description.value.url}
      />
    );
  };

  //! SOUNDCLOUD COMPONENT
  const SoundcloudComponent = (description) => {
    return (
      <ReactPlayer
        className="mt-4 grayscale"
        width="100%"
        height="30%"
        key={description.value._key}
        url={description.value.url}
      />
    );
  };

  //! MAIN PART
  const mainDescription = {
    types: {
      image: ImageComponent,
      vimeo: VimeoComponent,
      soundcloud: SoundcloudComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    //! text component
    block: {
      normal: ({ children }) => (
        <p className="text-justify pt-1 h-full">{children}</p>
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

  //! CREDITS PART
  const creditsDescription = {
    types: {
      image: ImageComponent,
      vimeo: VimeoComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    //! text component
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

  return (
    <>
      <PortableText value={description} components={mainDescription} />
      {/* credits */}
      <PortableText value={credits} components={creditsDescription} />
      {/* image gallery */}
      <div ref={sliderRef} className="keen-slider pt-4">
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
    </>
  );
}
