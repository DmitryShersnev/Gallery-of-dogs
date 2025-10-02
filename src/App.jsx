import "./App.css";
import { useState } from "react";
import SelectNumOfDogs from "./SelectNumOfDogs";
import UploadImg from "./UploadImg";
import ChoiceOfBreed from "./ChoiceOfBreed";

function App() {
  const [count, setCount] = useState(3);
  const [updateCount, setUpdateCount] = useState(0);
  const [selectedBreed, setSelectedBreed] = useState("all");
  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {updateCount} раз(а)</p>
      <ChoiceOfBreed
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        setUpdateCount={setUpdateCount}
      />
      <br />
      <SelectNumOfDogs count={count} setCount={setCount} />
      <UploadImg
        count={count}
        setUpdateCount={setUpdateCount}
        selectedBreed={selectedBreed}
      />
    </>
  );
}

export default App;
