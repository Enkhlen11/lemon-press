export const RowContainer = (item) => {
  return (
    <div className="titels">
      <p>{item.date}</p>
      <h3>{item.title}</h3>
    </div>
  );
};

export const PostLink = () => {
  return (
    <div className="kondi">
      <img src="/monkondi.webp" alt="" />
    </div>
  );
};
