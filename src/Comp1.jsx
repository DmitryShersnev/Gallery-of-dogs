const Comp1 = ({ count, setCount }) => {
  const onInputChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <label>
      Показать
      <input
        style={{ marginLeft: 10 }}
        type="number"
        value={count}
        min={1}
        max={50}
        onChange={onInputChange}
      />
    </label>
  );
};

export default Comp1;
