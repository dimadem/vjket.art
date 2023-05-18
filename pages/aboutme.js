import CenterFrame from "../layout/CenterFrame.layout";
import { withLayoutMain } from "../layout/LayoutMain.layout";
import { client } from "../lib/sanity.server";
import { groq } from "next-sanity";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { useResize } from "../hooks/useResize.hook";

function AboutMe() {
  const [resize, setResize] = useState({ width: Number, height: Number });
  useEffect(() => {
    setResize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useResize(setResize);

  // speed cursor
  const cursorSpeed = 70;

  return (
    <CenterFrame>
      <div className="flex flex-col w-full p-4 h-full font-redhatmono dark:text-white ">
        {resize.width > 640 ? (
          <>
            {/* Artist Name */}
            <div className="flex flex-row justify-around my-4 w-full">
              <h1 className="w-1/2 font-normal text-5xl text-center">
                KATERYNA PITS
              </h1>
              <h1 className="w-1/2 font-normal text-5xl text-center">VJkET</h1>
            </div>
            {/* Kate portraits */}
            <div className="flex flex-row py-16 h-fit justify-around">
              <video
                muted
                className="aspect-square w-1/2 md:w-1/3"
                preload="auto"
                autoPlay
                loop
                src="./media/avatar/selfie.mp4"
                type="video/mp4"
              />
              <video
                muted
                className="aspect-square w-1/2 md:w-1/3"
                preload="auto"
                autoPlay
                loop
                src="./media/avatar/polygon.mp4"
                type="video/mp4"
              />
            </div>
          </>
        ) : (
          <>
            {/* Artist Name */}
            <div className="flex flex-col justify-center items-center space-y-3">
              <h1 className="w-full font-normal text-5xl text-center">VJkET</h1>
              <h2 className="w-full font-normal text-3xl text-center">
                KATERYNA PITS
              </h2>
            </div>
            {/* Kate portraits */}
            <div className="flex flex-row mt-6 h-fit justify-around">
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
            </div>
          </>
        )}
        {/* Artist Bio */}
        <div className="font-thin text-2xl mt-7">
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
            universal/particular, narrative/structural, inside/outside,`,
            ]}
            speed={cursorSpeed} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="p"
            repeat={0}
            cursor={false}
            className={"text-justify"}
          />
          <p>
            <br />
          </p>
          <TypeAnimation
            sequence={[
              `
            that constitute the hard core of predominant mental habits of the
            day as if trying to discover or produce or to discover the way to
            produce (to hack, “hack the lack that lacks the hack”) a new
            “cyborg” body of sense able to break free from all too narrow throat
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

export default withLayoutMain(AboutMe);

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
