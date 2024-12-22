const ScrollSection = (title) => {
  return (
    <div className="scroll-one-section">
      <div className="img-section">
        <img s src="./sad.webp" alt="" />
      </div>
      <div className="info">
        <p className="blue-title">{title.description}</p>
        <h6>{title.header}</h6>
        <p className="date-info">{title.date}</p>
      </div>
    </div>
  );
};
export default ScrollSection;
