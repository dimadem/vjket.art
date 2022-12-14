import CenterFrame from "../components/layout/CenterFrame";
import { withLayoutMain } from "../components/layout/LayoutMain";
import { client } from "../lib/sanity.server";
import { groq } from "next-sanity";
import { TypeAnimation } from "react-type-animation";

function aboutme() {
  // speed cursor
  const cursorSpeed = 70;
  return (
    <CenterFrame>
      <div className="page flex flex-col font-redhatmono dark:text-white">
        <div className="flex flex-row justify-around">
          <h1 className="w-1/2 font-normal text-5xl text-center">
            KATERYNA PITS
          </h1>
          <h1 className="w-1/2 font-normal text-5xl text-center">VJkET</h1>
        </div>
        <div className="flex flex-row py-16 h-fit justify-around">
          <video
            muted
            preload="auto"
            autoPlay
            width="450"
            height="450"
            loop
            src="./media/avatar/selfie.mp4"
            type="video/mp4"
          />
          <video
            muted
            preload="auto"
            autoPlay
            width="450"
            height="450"
            loop
            src="./media/avatar/polygon.mp4"
            type="video/mp4"
          />
        </div>
        <div className="font-thin text-2xl py-7">
          <TypeAnimation
            sequence={[
              `New media artist and researcher in the field of digital-mechanic art and human-computer interaction. 

              `,
            ]}
            speed={cursorSpeed} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="p"
            cursor={false}
            className={"text-justify"}
          />
          <p>
            <br />
            <br />
          </p>
          <TypeAnimation
            sequence={[
              `
            Working with diverse materials and formats, artist repeatedly investigates, traces and questions the degrees of freedom of unstable borders between seemingly all well known oppositions forming the very base dichotomies:
`,
            ]}
            speed={cursorSpeed} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="p"
            cursor={false}
            className={"text-justify"}
          />
          <p>
            <br />
            <br />
          </p>
          <TypeAnimation
            sequence={[
              `
            random/algorithmic, natural/artificial, animated/mechanical,
            real/imaginary, analytic/synthetic, genuine/counterfeit,
            universal/particular, narrative/structural, inside/outside,
`,
            ]}
            speed={cursorSpeed} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="p"
            repeat={0}
            cursor={false}
            className={"text-justify"}
          />
          <p>
            <br />
            <br />
          </p>
          <TypeAnimation
            sequence={[
              `
            that constitute the hard core of predominant mental habits of the
            day as if trying to discover or produce or to discover the way to
            produce (to hack, ???hack the lack that lacks the hack???) a new
            ???cyborg??? body of sense able to break free from all too narrow throat
            of binary code.`,
            ]}
            speed={cursorSpeed} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="p"
            repeat={0}
            className={"text-justify"}
          />
        </div>
      </div>
    </CenterFrame>
  );
}

export default withLayoutMain(aboutme);

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
