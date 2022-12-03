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
    groq`*[_type == "discipline"] | order(asc){title, "slug": slug.current, _id}`
  );
  const years = await client.fetch(
    groq`*[_type == "year"] | order(asc){title, "slug": slug.current, _id}`
  );

  return {
    props: {
      disciplines,
      years,
    },
  };
}
