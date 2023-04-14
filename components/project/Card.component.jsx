export default function CardComponent({ location, date, technologies }) {
  return (
    <ul className="w-full p-2 sm:p-2 sm:w-1/2 flex flex-col justify-around">
      <li className="cardListItem">location</li>
      <li className="cardListData">{location}</li>
      <li className="cardListItem">year</li>
      <li className="cardListData">{date.slice(0, 4)}</li>
      <li className="cardListItem">technologies</li>
      <li className="cardListData">{technologies}</li>
    </ul>
  );
}
