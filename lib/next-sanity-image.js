import { client } from "../lib/sanity.server";
import { useNextSanityImage } from "next-sanity-image";

export const useImageProps = (image) => useNextSanityImage(client, image);
