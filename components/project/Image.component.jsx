import Image from "next/image";
import { useImageProps } from "../../lib/next-sanity-image";

export default function ImageComponent({ mainImage }) {
  // mainImage
  const imageProps = useImageProps(mainImage);
  return (
    <div className="w-1/2">
      <Image
        className="
           rounded-sm
           aspect-video
           bg-neutralBlack
           dark:bg-neutralWhite
           "
        alt="mainImage"
        {...imageProps}
      />
    </div>
  );
}
