export const disciplines = [
  { href: "/discipline/mapping", label: "mapping__________" },
  { href: "/discipline/advertisement", label: "advertisement____" },
  { href: "/discipline/gallery", label: "gallery__________" },
  { href: "/discipline/theatre", label: "theatre__________" },
  { href: "/discipline/vj", label: "vj_______________" },
  { href: "/discipline/concert", label: "concert__________" },
];

export const years = [
  { href: "/year/2022", label: "2022" },
  { href: "/year/2021", label: "2021" },
  { href: "/year/2020", label: "2020" },
  { href: "/year/2019", label: "2019" },
  { href: "/year/2018", label: "2018" },
  { href: "/year/2017", label: "2017" },
  { href: "/year/2016", label: "2016" },
  { href: "/year/2015", label: "2015" },
  { href: "/year/2014", label: "2014" },
  { href: "/year/2013", label: "2013" },
];

import { BsVimeo, BsFacebook } from "react-icons/bs";
import { ImSoundcloud } from "react-icons/im";

export const socials = [
  { id: "vimeo", href: "https://vimeo.com/vjket", label: [<BsVimeo />] },
  {
    id: "facebook",
    href: "https://www.facebook.com/VJkET",
    label: [<BsFacebook />],
  },
  {
    id: "soundcloud",
    href: "https://soundcloud.com/ms-upbringer",
    label: [<ImSoundcloud />],
  },
];
