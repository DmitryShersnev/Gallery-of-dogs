import { useState, useEffect } from "react";

function Comp2({ count, setUpdateCount, selectedBreed }) {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDogs = async () => {
    setLoading(true);
    try {
      let url;
      if (selectedBreed === "all") {
        url = `https://dog.ceo/api/breeds/image/random/${count}`;
      } else {
        url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/${count}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === "success") {
        setDogs(data.message);
      } else {
        setDogs([]);
      }
    } catch {
      setDogs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDogs();
  }, [selectedBreed]);

  const onUpdateClick = () => {
    fetchDogs();
    setUpdateCount((prev) => prev + 1);
  };
  return (
    <>
      <button
        onClick={onUpdateClick}
        disabled={loading}
        style={{ marginTop: 15, marginBottom: 15 }}
      >
        Обновить
      </button>
      <div style={{ marginTop: 15 }}>
        {loading
          ? "Загрузка..."
          : dogs.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Собака"
                style={{
                  height: 250,
                  marginRight: "10px",
                }}
              />
            ))}
      </div>
    </>
  );
}

export default Comp2;
