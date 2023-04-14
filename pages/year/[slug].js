import { client } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import { withLayoutProject } from "../../layout/LayoutProject.layout";
import CenterFrame from "../../layout/CenterFrame.layout";
import InfoBar from "../../components/InfoBar.component";
import Project from "../../components/project/Project.component";

export async function getStaticPaths() {
  const disciplineQuery = groq`*[_type=="year"]{"slug": slug.current}`;

  const years = await client.fetch(disciplineQuery);

  const paths = years.map((year) => ({
    params: { slug: year.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  //MENU ITEMS
  const disciplines = await client.fetch(
    groq`*[_type == "discipline"]{title, "slug": slug.current, _id} | order(asc)`
  );
  const years = await client.fetch(
    groq`*[_type == "year"]{title, "slug": slug.current, _id} | order(title desc)`
  );

  const disciplineQuery = groq`*[_type=="year" && slug.current == "${slug}"]{
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
      credits
    } | order(date desc)
  } `;

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
      </CenterFrame>
      <InfoBar year={projects && projects[0]?.date} />
    </>
  );
}
export default withLayoutProject(ProjectsPage);
