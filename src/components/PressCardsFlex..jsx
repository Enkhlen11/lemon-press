export const PressTitle = (titleCard) => {
  return (
    <div className="cardsFlex">
      <p className="press-title-width">ХЭВЛЭЛИЙН МЭДЭЭ</p>
      <div className="press-dotted"></div>
      <p className="Press-last-title">Илүү үзэх</p>
    </div>
  );
};
export const PressCards = (oneCard) => {
  return (
    <div className="card">
      <img src={oneCard.image} alt="" />
      <div className="imgHeader">
        <p className="blueWord">{oneCard.description}</p>
        <h1>{oneCard.info}</h1>
        <p>{oneCard.date}</p>
      </div>
    </div>
  );
};
