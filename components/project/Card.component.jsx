export default function CardComponent({ location, date, technologies }) {
  return (
    <ul className="w-full p-2 sm:p-0 sm:w-1/2 flex flex-col justify-around">
      <li
        className="
      font-normal
      text-lg
      text-neutralBlack
      dark:text-white
      tracking-widest
      "
      >
        location
      </li>

      <li
        className="
      font-extralight
      text-neutralBlack
      dark:text-white
      "
      >
        {location}
      </li>

      <li
        className="
      font-normal
      text-lg 
      text-neutralBlack
      dark:text-white
      tracking-widest
      "
      >
        year
      </li>

      <li
        className="
      font-extralight
      text-neutralBlack
      dark:text-white
      "
      >
        {date.slice(0, 4)}
      </li>

      <li
        className="
      font-normal
      text-lg
      text-neutralBlack
      dark:text-white
      tracking-widest
      "
      >
        technologies
      </li>
      <li
        className="
      font-extralight
      text-neutralBlack
      dark:text-white
      "
      >
        {technologies}
      </li>
    </ul>
  );
}
