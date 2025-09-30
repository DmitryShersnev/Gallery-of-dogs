import { useState, useEffect } from "react";

const Comp3 = ({ count, setCount }) => {
  const [breeds, setBreeds] = useState({});
  const [selectedBreed, setSelectedBreed] = useState("all");

  const onInputChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const breedsList = async () => {
    try {
      const res = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const data = await res.json();
      if (data.status === "success") {
        setBreeds(data.message);
      } else {
        setBreeds({});
      }
    } catch {
      setBreeds({});
    }
  };

  useEffect(() => {
    breedsList();
  }, []);

  return (
    <label>
      Порода:
      <select
        style={{ marginLeft: 10 }}
        value={selectedBreed}
        onChange={onInputChange}
      >
        <option value="all">Все породы</option>
        {Object.keys(breeds).map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Comp3;
