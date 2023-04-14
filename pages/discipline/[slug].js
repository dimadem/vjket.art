import { client } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import Project from "../../components/project/Project.component";
import CenterFrame from "../../layout/CenterFrame.layout";
import { withLayoutProject } from "../../layout/LayoutProject.layout";
import InfoBar from "../../components/InfoBar.component";

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

//! page rendered when a user clicks on a discipline in the MainMenu
export async function getStaticProps({ params: { slug } }) {
  //MENU ITEMS
  const disciplinesGroq = groq`*[_type == "discipline"]{title, "slug": slug.current, _id} | order(asc)`;
  const yearsGroq = groq`*[_type == "year"]{title, "slug": slug.current, _id} | order(title desc)`;
  const disciplines = await client.fetch(disciplinesGroq);
  const years = await client.fetch(yearsGroq);

  // fetch projects
  const projectsQuery = groq`*[_type=="discipline" && slug.current == "${slug}"]{
    _id,
    title,
  "projects": *[_type == "project" && references(^._id) && !(_id in path("drafts.**"))]{
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->{...,metadata},
      "disciplines": disciplines[]->{title},
      date,
      location,
      "technologies": technologies[]->{title},
      description,
      credits,
      gallery
    } | order(date desc)
  }`;
  const data = await client.fetch(projectsQuery);
  const projects = await data[0].projects;

  return {
    props: { projects, disciplines, years },
  };
}

function ProjectsPage({ projects }) {
  const disciplineData = projects && projects[0]?.disciplines[0]?.title;

  return (
    <>
      <CenterFrame>
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
              gallery /* GALLERY IMAGES */,
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
                  gallery={gallery}
                />
              );
            }
          )}
      </CenterFrame>
      <InfoBar discipline={disciplineData} />
    </>
  );
}
export default withLayoutProject(ProjectsPage);
