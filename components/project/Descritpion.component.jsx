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
  //! components for description and credits
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
        className="float-left pr-5"
        id={description.value._key}
        video={description.value.url}
        width="500%"
      />
    );
  };
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

  const componentsDescription = {
    types: {
      image: ImageComponent,
      vimeo: VimeoComponent,
      soundcloud: SoundcloudComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
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
        perView: 3,
        spacing: 10,
      },
    },
    []
  );

  return (
    <>
      <PortableText value={description} components={componentsDescription} />
      {/* credits */}
      <PortableText value={credits} components={componentsCredits} />
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
