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
  if (!Project) return <div />;
  return (
    <div
      key={_id}
      className="flex flex-col h-fit pt-4 justify-start mx-3 my-1 font-redhatmono"
    >
      <HeaderComponent title={title} disciplines={disciplines} />

      <div className="flex flex-row justify-center items-stretch h-auto space-x-2 w-fit">
        {/* mainImage */}
        <ImageComponent mainImage={mainImage} />
        {/* about project card */}
        <CardComponent
          location={location}
          date={date}
          technologies={technologies}
        />
      </div>
      {/* project description */}
      <Disclosure>
        <ShowDescriptionButton />
        <Disclosure.Panel className="p-4 bg-neutralWhite dark:bg-neutralBlack">
          <DescritpionComponent
            description={description}
            credits={credits}
            gallery={gallery}
          />
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}