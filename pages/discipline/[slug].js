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

//! This is the page that is rendered when a user clicks on a discipline in the MainMenu
export async function getStaticProps({ params: { slug } }) {
  //MENU ITEMS
  const disciplines = await client.fetch(
    groq`*[_type == "discipline"]{title, "slug": slug.current, _id} | order(asc)`
  );
  const years = await client.fetch(
    groq`*[_type == "year"]{title, "slug": slug.current, _id} | order(title desc)`
  );

  // fetch projects
  const disciplineQuery = groq`*[_type=="discipline" && slug.current == "${slug}"]{
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
  console.log(disciplineQuery);
  const data = await client.fetch(disciplineQuery);
  const projects = await data[0].projects;

  return {
    props: { projects, disciplines, years },
  };
}

function ProjectsPage({ projects }) {
  return (
    <>
      <CenterFrame>
        <div className="flex flex-col h-fit mb-2 divide-y divide-dashed divide-black dark:divide-neutralWhite">
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
        </div>
      </CenterFrame>
      <InfoBar discipline={projects && projects[0]?.disciplines[0]?.title} />
    </>
  );
}
export default withLayoutProject(ProjectsPage);
