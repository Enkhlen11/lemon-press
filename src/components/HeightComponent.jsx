const HeightComponent = (title) => {
  return (
    <div className="secondDiv">
      <p className="blueWord">{title.description}</p>
      <h1>{title.header}</h1>
      <p>{title.date}</p>

      <div className="line-border-top"> </div>
    </div>
  );
};
export default HeightComponent;
