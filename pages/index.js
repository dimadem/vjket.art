import PolyMenu from "../components/PolyMenu.component";
import { withLayoutMain } from "../layout/LayoutMain.layout";
import { client } from "../lib/sanity.server";
import { groq } from "next-sanity";

//fetching data for MainMenu
export async function getStaticProps() {
  const disciplines = await client.fetch(
    groq`*[_type == "discipline"]{title, "slug": slug.current, _id} | order(asc)`
  );
  const years = await client.fetch(
    groq`*[_type == "year"]{title, "slug": slug.current, _id} | order(title desc)`
  );
  //testing
  // console.log(disciplines, years);

  return {
    props: {
      disciplines,
      years,
    },
  };
}

function Home() {
  return <PolyMenu />;
}

export default withLayoutMain(Home);
