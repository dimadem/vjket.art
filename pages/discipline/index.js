import Head from "next/head";
import { client } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import Project from "../../components/layout/Project";
import { data } from "autoprefixer";
import Sidebar from "../../components/layout/Sidebar";
import InfoBar from "../../components/layout/InfoBar";
import CenterFrame from "../../components/layout/CenterFrame";

export default function ProjectsPage({ projects }) {
  console.log("ProjectsPage: ", projects);

  return (
    <>
      <Sidebar />
      <CenterFrame>
        <div className="flex flex-col h-fit w-full mb-2 divide-y divide-dashed divide-black">
          {projects?.map(
            ({
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
            }) => {
              return (
                <Project
                  key={_id}
                  title={title}
                  slug={slug}
                  // mainImage={mainImage}
                  disciplines={disciplines[0].title}
                  date={date}
                  location={location}
                  technologies={technologies[0].title}
                  // description={description}
                  // credits={credits}
                />
              );
            }
          )}
        </div>
      </CenterFrame>
      <InfoBar />
    </>
  );
}

export async function getStaticProps() {
  const disciplineQuery = groq`*[_type == 'project'] | order(year asc){
    _id,
    title,
    "slug": slug.current,
    mainImage,
    "disciplines": disciplines[]->{title},
    date,
    location,
    "technologies": technologies[]->{title},
    description[],
    credits[]
  }`;

  const projects = await client().fetch(disciplineQuery);
  console.log("GetServerSideProps: ", projects);

  // const dataSample = [
  //   {
  //     _id: "1",
  //     title: "nomadnomadnomadnomadnomadnomadnomad",
  //     slug: "nomad",
  //     disciplines: "architect mapping",
  //     date: "2022-01-01",
  //     location: "Electrotheatre Stanislavsky  [ Moscow / Russia ]",
  //     technologies: "touchdesigner",
  //     description:
  //       "Buddha Y-NǾ says no lies. He lives in cipherspace. He studies Matrix acid stimulation. It speaks when it comes: moans, cries it's digital eyes out and says: ◦◌○. It means it doesn't matter anymore. Cipher-neon abstract state machines he loves. And abstract neon-state cipher-machines reciprocate Y-nǾ-thing's feeling. VǾid is undetectable by sensing devices. Cause it's subset of any set, including set that coincides with void-set. He's ultra and violet. He breathes with all the beautiful gases of Sprawl: xenon, argon and especially neon. Neon, says Buddha Y-NǾ, is n.aeon, or new aeon. Of neo-n, where n is a first letter of the word ",
  //     credits: "Music: Marco Accardi Text: The D[e]ad [ Serge Stepanishchev ]",
  //     mainImage: "MEDIA",
  //   },
  //   {
  //     _id: "2",
  //     title: "QWERTYY",
  //     slug: "qwertyy",
  //     disciplines: "architect mapping",
  //     data: "2022-04-01",
  //     location: "Electrotheatre Stanislavsky  [ Moscow / Russia ]",
  //     technologies: "touchdesigner",
  //     description:
  //       "Buddha Y-NǾ says no lies. He lives in cipherspace. He studies Matrix acid stimulation. It speaks when it comes: moans, cries it's digital eyes out and says: ◦◌○. It means it doesn't matter anymore. Cipher-neon abstract state machines he loves. And abstract neon-state cipher-machines reciprocate Y-nǾ-thing's feeling. VǾid is undetectable by sensing devices. Cause it's subset of any set, including set that coincides with void-set. He's ultra and violet. He breathes with all the beautiful gases of Sprawl: xenon, argon and especially neon. Neon, says Buddha Y-NǾ, is n.aeon, or new aeon. Of neo-n, where n is a first letter of the word ",
  //     credits: "Music: Marco Accardi Text: The D[e]ad [ Serge Stepanishchev ]",
  //     mainImage: "MEDIA",
  //   },
  //   {
  //     _id: "3",
  //     title: "fake fake fake",
  //     slug: "fake-fake-fake",
  //     disciplines: "architect mapping",
  //     data: "2022-07-01",
  //     location: "Electrotheatre Stanislavsky  [ Moscow / Russia ]",
  //     technologies: "touchdesigner",
  //     description:
  //       "text, text, text, lorem ipsumtext, text, text, lorem ipsumtext, text, text, lorem ipsumtext, text, text, lorem ipsumtext, text, text, lorem ipsum",
  //     credits: "Music: Marco Accardi Text: The D[e]ad [ Serge Stepanishchev ]",
  //     mainImage: "MEDIA",
  //   },
  // ];

  return {
    props: { projects },
  };
}
