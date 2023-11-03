const Item = ({ technology }) => {
  return (
    <>
      <img
        src={`technologies/${technology.value}.png`}
        alt={technology.value}
      />
    </>
  );
};

export default Item;
