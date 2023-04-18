import { useImageProps } from "../../lib/next-sanity-image";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export default function Gallery({ gallery }) {
  // ! GALLERY Component
  const GalleryProps = (image) => useImageProps(image);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1,
        spacing: 10,
      },
    },
    []
  );

  return (
    <div ref={sliderRef} className="keen-slider">
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
  );
}
