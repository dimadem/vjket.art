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
           bg-neutralBlack
           dark:bg-neutralWhite
           "
        {...imageProps}
        alt="mainImage"
        style={{ width: "50%", height: "auto" }}
      />
    </div>
  );
}
