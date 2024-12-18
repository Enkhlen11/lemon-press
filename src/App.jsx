import "./app.css";
import "./container.css";

import Card from "./components/Card";
import Header from "./components/Header";
import Container from "./components/container";
import HeightComponent from "./components/HeightComponent";

const cards = [
  {
    img: "https://dash-api.yld.mn/api/image/f486afba-6fea-4318-baef-27c0e2582ff4",
    category: "БИЗНЕС",
    header: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
    date: "М.Хулан/ 12 сарын 13, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/13aeb310-9ed2-478c-bf7a-a5f21ccc34c8",
    category: "САНХҮҮ",
    header: "Apple Pay 10 жилийн ойгоороо Монголд нэвтэрлээ",
    date: "С.Ангирмаа/ 12 сарын 13, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/62d20840-42f6-46b9-8797-5cd80c97fac9",
    category: "БИЗНЕС",
    header: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
    date: "Б.Эмүжин/ 12 сарын 13, 2024",
  },
];
const componentArray = [
  {
    category: "САНХҮҮ",
    header: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
    date: "М.Хулан/ 12 сарын 18, 2024",
  },
  {
    category: "САНХҮҮ",
    header: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "С.Ангирмаа/ 12 сарын 17, 2024",
  },
  {
    category: "САНХҮҮ",
    header: "Казакстаны хөгжлийн цаана",
    date: "М.Хулан/ 12 сарын 17, 2024",
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className="flexDiv">
        <Container />
        <div class>
          <img src="/plane.webp" alt="" />
          {componentArray.map((oneObject) => {
            return (
              <HeightComponent
                description={oneObject.category}
                header={oneObject.header}
                date={oneObject.date}
              />
            );
          })}
        </div>
        <HeightComponent />
      </div>
      <div className="cardsFlex">
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
    </div>
  );
}

export default App;
