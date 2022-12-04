import { client } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import Project from "../../components/layout/Project";
import CenterFrame from "../../components/layout/CenterFrame";
import { withLayoutProject } from "../../components/layout/LayoutProject";

export async function getStaticPaths() {
  const disciplineQuery = groq`*[_type=="discipline"]{"slug": slug.current}`;

  const disciplines = await client.fetch(disciplineQuery);

  const paths = disciplines.map((discipline) => ({
    params: { slug: discipline.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const disciplineQuery = groq`*[_type=="discipline" && slug.current == "${slug}"]{
    _id,
    title,
  "projects": *[_type == "project" && references(^._id)]| order(year asc){
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->{...,metadata},
      "disciplines": disciplines[]->{title},
      date,
      location,
      "technologies": technologies[]->{title},
      description,
      credits
    }
  } `;

  const data = await client.fetch(disciplineQuery);
  const projects = await data[0].projects;
  // console.log("GetServerSideProps: ", projects);

  return {
    props: { projects },
  };
}

function ProjectsPage({ projects }) {
  return (
    <CenterFrame>
      <div className="flex flex-col h-fit w-full mb-2 divide-y divide-dashed divide-black dark:divide-neutralWhite">
        {projects &&
          projects.map(
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
                  mainImage={mainImage}
                  disciplines={disciplines[0].title}
                  date={date}
                  location={location}
                  technologies={technologies[0].title}
                  description={description}
                  credits={credits}
                />
              );
            }
          )}
      </div>
    </CenterFrame>
  );
}
export default withLayoutProject(ProjectsPage);
