import PolyMenu from "../components/layout/PolyMenu";
import { withLayoutMain } from "../components/layout/LayoutMain";
import { client } from "../lib/sanity.server";
import { groq } from "next-sanity";

function Home({ disciplines, years }) {
  // console.log("disciplines:", disciplines);
  // console.log("years:", years);

  return (
    <>
      <PolyMenu />
    </>
  );
}

export default withLayoutMain(Home);

export async function getStaticProps() {
  const disciplines = await client.fetch(
    groq`*[_type == "discipline"] | order(asc){title, "slug": slug.current}`
  );
  const years = await client.fetch(
    groq`*[_type == "year"] | order(asc){title, "slug": slug.current}`
  );

  return {
    props: {
      disciplines,
      years,
    },
  };
}
