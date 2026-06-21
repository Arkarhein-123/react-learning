import { useEffect, useState } from "react";

export default function UseEffectPractice() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => data.results)
      .then((results) => results.map((swObj) => swObj.name))
      .then((names) => setOptions(names));
  }, []);

  return (
    <select className="mt-6 bg-danger px-3 py-3 mx-auto my-3">
      {options.map((option, id) => (
        <option key={option}>{`${id} : ${option}`}</option>
      ))}
    </select>
  );
}
