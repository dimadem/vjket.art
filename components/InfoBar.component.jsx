export default function InfoBar({ discipline, year }) {
  return (
    <div className="flex order-last flex-col bg-white h-screen justify-evenly items-center w-1/12 dark:bg-black dark:text-neutralWhite">
      {discipline &&
        discipline.split("").map((letter, key) => {
          return (
            <p key={key} className="text-3xl">
              {letter}
            </p>
          );
        })}
      {year &&
        year
          .slice(0, 4)
          .split("")
          .map((letter, key) => {
            return (
              <p key={key} className="text-3xl">
                {letter}
              </p>
            );
          })}
    </div>
  );
}
