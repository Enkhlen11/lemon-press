const Card = (oneCard) => {
  return (
    <div className="card">
      <img src={oneCard.image} alt="" />
      <div className="imgHeader">
        <p className="blueWord">{oneCard.description}</p>
        <h1>{oneCard.header}</h1>
        <p>{oneCard.date}</p>
      </div>
    </div>
  );
};
export default Card;
