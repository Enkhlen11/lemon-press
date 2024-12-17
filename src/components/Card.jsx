const Card = (oneCard) => {
  return (
    <div className="card">
      <img src={oneCard.image} alt="" />
      <p>{oneCard.description}</p>
      <h1>{oneCard.header}</h1>
      <p>{oneCard.date}</p>
    </div>
  );
};
export default Card;
