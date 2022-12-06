import PolyMenu from "../components/layout/PolyMenu";
import { withLayoutMain } from "../components/layout/LayoutMain";
import { client } from "../lib/sanity.server";
import { groq } from "next-sanity";

function Home() {
  return (
    <>
      <PolyMenu />
    </>
  );
}

export default withLayoutMain(Home);

//fetching data for MainMenu
export async function getStaticProps() {
  const disciplines = await client.fetch(
    groq`*[_type == "discipline"]{title, "slug": slug.current, _id} | order(asc)`
  );
  const years = await client.fetch(
    groq`*[_type == "year"]{title, "slug": slug.current, _id} | order(title desc)`
  );

  return {
    props: {
      disciplines,
      years,
    },
  };
}
