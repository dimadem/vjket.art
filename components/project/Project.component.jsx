import { useState, useEffect } from "react";
import { useResize } from "../../hooks/useResize.hook";
import { Disclosure } from "@headlessui/react";
import ShowDescriptionButton from "../ui/DescriptionButton";
import DescritpionComponent from "./Descritpion.component";
import ImageComponent from "./Image.component";
import CardComponent from "./Card.component";
import HeaderComponent from "./Header.component";

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
  gallery /* CAROUSEL IMAGES */,
}) {
  const [resize, setResize] = useState({ width: Number, height: Number });
  useEffect(() => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useResize(setResize);

  return (
    <div key={_id} className="projectCard">
      <HeaderComponent title={title} disciplines={disciplines} />
      <div className="flex flex-row justify-center items-stretch h-auto space-x-2 w-fit">
        {/* mainImage */}
        {resize.width > 640 ? <ImageComponent mainImage={mainImage} /> : null}
        {/* about project card */}
        <CardComponent
          location={location}
          date={date}
          technologies={technologies}
        />
      </div>
      <div className="container text-end h-fit w-full">
        {/* project description */}
        <Disclosure>
          <ShowDescriptionButton />
          <Disclosure.Panel className="bg-neutralWhite dark:bg-neutralBlack">
            <DescritpionComponent
              description={description}
              credits={credits}
              gallery={gallery}
            />
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  );
}
