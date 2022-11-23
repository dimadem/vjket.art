import { client } from "../lib/sanity.server";
import { useNextSanityImage } from "next-sanity-image";

export const imageProps = (image) => useNextSanityImage(client, image);
