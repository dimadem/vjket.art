import { client } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import Project from "../../components/project/Project.component";
import CenterFrame from "../../layout/CenterFrame.layout";
import { withLayoutProject } from "../../layout/LayoutProject.layout";
import { PreviewSuspense } from "next-sanity/preview";

export async function getStaticPaths() {
  const projectQuery = groq`*[_type=="project"]{"slug": slug.current}`;

  const projects = await client.fetch(projectQuery);

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
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
  const projectsQuery = groq`*[_type=="project" && slug.current =="${slug}"]{
    _id,
    title,
    credits,
    date,
    vimeo,
    soundcloud,
    description,
    "disciplines": disciplines[]->{title},
    gallery,
    location,
    mainImage,
    "slug": slug.current,
    "technologies": technologies[]->{title},
    }`;
  const data = await client.fetch(projectsQuery);

  const projects = await data[0];

  return {
    props: { projects, disciplines, years },
  };
}

function ProjectsPage({
  projects: {
    _id,
    title,
    slug,
    mainImage,
    date,
    location,
    technologies,
    soundcloud,
    vimeo,
    description,
    credits,
    gallery,
    disciplines,
  },
}) {
  return (
    <CenterFrame>
      <Project
        key={_id}
        disciplines={disciplines[0].title}
        title={title}
        slug={slug}
        mainImage={mainImage}
        date={date}
        location={location}
        technologies={technologies[0].title}
        soundcloud={soundcloud}
        vimeo={vimeo}
        description={description}
        credits={credits}
        gallery={gallery}
      />
    </CenterFrame>
  );
}
export default withLayoutProject(ProjectsPage);
