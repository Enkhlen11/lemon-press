export const CardTitle = (titleCard) => {
  return (
    <div className="cardsFlex">
      <p className="card-title-width">Бизнес</p>
      <div className="dotted"></div>
      <p className="footer-title">Илүү үзэх</p>
    </div>
  );
};
export const SecondCards = (oneCard) => {
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
