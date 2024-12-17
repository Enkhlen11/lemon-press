import Card from "./components/Card";
import "./app.css";
const cards = [
  {
    img: "./lemon",
    category: "БИЗНЕС",
    header: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
    date: "М.Хулан/ 12 сарын 13, 2024",
  },
  {
    img: "./apple",
    category: "САНХҮҮ",
    header: "Apple Pay 10 жилийн ойгоороо Монголд нэвтэрлээ",
    date: "С.Ангирмаа/ 12 сарын 13, 2024",
  },
  {
    img: "./vans",
    category: "БИЗНЕС",
    header: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
    date: "Б.Эмүжин/ 12 сарын 13, 2024",
  },
];

function App() {
  return (
    <div>
      {cards.map((card) => {
        return (
          <Card
            image={card.img}
            description={card.category}
            header={card.header}
            date={card.date}
          />
        );
      })}
    </div>
  );
}

export default App;
