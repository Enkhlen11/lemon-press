const RowContainer = (item) => {
  return (
    <div className="titels">
      <p>{item.date}</p>
      <h3>{item.title}</h3>
    </div>
  );
};
export default RowContainer;
