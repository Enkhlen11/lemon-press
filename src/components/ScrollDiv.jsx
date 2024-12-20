const ScrollSection = (title) => {
  return (
    <div className="">
      <div className="">
        <img className="plane" src="./sad.webp" alt="" />
      </div>
      <div className="">
        <p>{title.description}</p>
        <h6>{title.header}</h6>
        <p>{title.date}</p>
      </div>
    </div>
  );
};
export default ScrollSection;
