import "./app.css";
import "./container.css";
import "./breakNews.css";
import "./rowContainer.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Container from "./components/container";
import HeightComponent from "./components/HeightComponent";
import News from "./components/BreakingNews";
import { RowContainer, PostLink } from "./components/RowContainer";

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

const scrollColumn = [
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Нэг тэнгэрт нэг л компани",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Крипто самурай Ньюе-Йоркт",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Тэр эргэн ирнэ",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <div className="rowImg">
        <img src="/rowImg.png" alt="" />
      </div>
      <div>
        <News />
      </div>
      <div className="flexDiv">
        <Container />
        <div className="plane">
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
      </div>
      <div className="rowArr">
        <div className="scrollDiv">
          {scrollColumn.map((column) => {
            return <RowContainer date={column.date} title={column.title} />;
          })}
        </div>
        <PostLink />

        <div className="right-kondi">
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
