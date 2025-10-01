import "./App.css";
import { useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

function App() {
  const [count, setCount] = useState(3);
  const [updateCount, setUpdateCount] = useState(0);
  const [selectedBreed, setSelectedBreed] = useState("all");
  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {updateCount} раз(а)</p>
      <Comp3
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        setUpdateCount={setUpdateCount}
      />
      <br />
      <Comp1 count={count} setCount={setCount} />
      <Comp2
        count={count}
        setUpdateCount={setUpdateCount}
        selectedBreed={selectedBreed}
      />
    </>
  );
}

export default App;
