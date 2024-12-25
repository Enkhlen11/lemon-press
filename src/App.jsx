import "./app.css";
import "./container.css";
import "./breakNews.css";
import "./rowContainer.css";
import "./subscribeCover.css";
import "./scrollDiv.css";
import "./seeMore.css";
import "./pressCardsFlex.css";
import "./footerSection.css";
import { Card, CardTitle } from "./components/Card";
import Header from "./components/Header";
import Container from "./components/container";
import HeightComponent from "./components/HeightComponent";
import News from "./components/BreakingNews";
import { RowContainer, PostLink } from "./components/RowContainer";
import { Cover } from "./components/SubscribeCover";
import ScrollSection from "./components/ScrollDiv";
import SeeMore from "./components/SeeMore";
import { PressCards, PressTitle } from "./components/PressCardsFlex.";
import FooterSection from "./components/FooterSection";

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
const pressCard = [
  {
    img: "https://dash-api.yld.mn/api/image/9150a4b0-5a23-4aba-9080-34a41b67e398",
    category: "ХЭВЛЭЛИЙН МЭДЭЭ",
    header:
      "Fulham клубтэй хамтарсан Adidas брэндийн Mongolia загварууд Монголд",
    date: "М.Хулан/ 12 сарын 13, 2024",
  },
  {
    img: "monkondi.webp",
    category: "ХЭВЛЭЛИЙН МЭДЭЭ",
    header: "Monkondi брэнд Just Chocolate-г зах зээлд нэвтрүүллээ ",
    date: "С.Ангирмаа/ 12 сарын 18, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/18016e65-ab3a-447d-9469-494c3ee7cffc",
    category: "ХЭВЛЭЛИЙН МЭДЭЭ",
    header: "Монгол бартендер дэлхийд өрсөлдлөө ",
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
    title: "🦄 Монгол компаниудын 2024 оны өнгө",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "💥 Банк + Уул уурхай",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🗺️ Технологи + ББСБ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🧑‍🤝‍🧑 Нэгдэн нийлэгсэд ",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "✍️ Гэрэг-Turning Points: Дэлхийн стандартаар бэлтгэв",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🆙 ОУ-ын банкнууд санхүүжилтээ нэмэв",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🤜 Дэлхийд буурч, Монголд өснө тэр юу вэ?",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "С🤔 Нүүрс: Экспорт = Тэнгэр, Үнэ = Газар",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Танхимын Ерөнхийлөгч ➡️ Шийдэх асуудал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🌱 $KHAN-н ногоон өсөлт ба үр дүн",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🤥 Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🔥 Шинэ бонд айсуй",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "✋ Даатгал: 4+1=5",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "💰 Хамгийн том төгрөгийн бонд",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "Танхимын Ерөнхийлөгч ➡️ Шийдэх асуудал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🪬 Хилийн чанад дахь хамгаалал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🤥 Сандал ширээний онц байдал",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "📢 Худалдааны дайн 2.0",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "🤡 Монголын ТОП асуудал: Өөртөө хэт итгэлтэй",
  },
  {
    date: "Wed,04 Dec 202title4 23:00:00 +0000",
    title: "📢 “Ухаалаг засаг” II = $40 тэрбум",
  },
];
const scrollTitle = [
  {
    category: "УЛС ТӨР",
    header: "Утааны асуудлыг Яндангүй бүс гаргаж шийдэх юм гэнэ",
    date: "С.Ангирмаа/ 12 сарын 18, 2024",
  },
  {
    category: "ЗАХ ЗЭЭЛ",
    header: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
    date: "С.Ангирмаа/ 12 сарын 17, 2024",
  },
  {
    category: "MINNING 101",
    header: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "С.Ангирмаа/ 12 сарын 17, 2024",
  },
  {
    category: "ХЭВЛЭЛИЙН МЭДЭЭ",
    header: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "С.Ангирмаа/ 12 сарын 17, 2024",
  },
  {
    category: "БИЗНЕС",
    header: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    date: "С.Ангирмаа/ 12 сарын 17, 2024",
  },
  {
    category: "САНХҮҮ",
    header: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "С.Ангирмаа/ 12 сарын 17, 2024",
  },
  {
    category: "САНХҮҮ",
    header: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "С.Ангирмаа/ 12 сарын 17, 2024",
  },
  {
    category: "САНХҮҮ",
    header: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "С.Ангирмаа/ 12 сарын 17, 2024",
  },
];
const pressCards = [
  {
    img: "./monkondi.webp",
    category: "ХЭВЛЭЛИЙН МЭДЭЭ",
    header: "Monkondi брэнд Just Chocolate-г зах зээлд нэвтрүүллээ ",
    date: "М.Хулан/ 12 сарын 18, 2024",
  },
  {
    img: "https://dash-api.yld.mn/api/image/18016e65-ab3a-447d-9469-494c3ee7cffc",
    category: "ХЭВЛЭЛИЙН МЭДЭЭ",
    header: "Монгол бартендер дэлхийд өрсөлдлөө  ",
    date: "М.Хулан/ 12 сарын 13, 2024",
  },
  {
    img: "./football.webp",
    category: "ХЭВЛЭЛИЙН МЭДЭЭ",
    header:
      "Чанарын өндөр түвшинд албан байгууллага болон оффис цэвэрлэгээний үйлчилгээ үзүүлнэ ",
    date: "М.Хулан/ 12 сарын 12, 2024",
  },
];
// const firstTitle = [
//   { first: "Бизнес" },
//   { first: "Хэвлэлийн мэдээ" },
//   { first: "Эдийн засаг" },
//   { first: "Олон улс" },
//   { first: "Сурталчилгаа" },
// ];

function App() {
  return (
    <div className="container">
      <Header />
      <div className="rowImg">
        <img src="./rowImg.png" alt="" />
      </div>

      <News />

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
          <div className="booklet">Товхимлууд</div>
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
      <Cover />
      <div className="flex-section">
        <div className="all-height">
          {scrollTitle.map((columnOne) => {
            return (
              <ScrollSection
                description={columnOne.category}
                header={columnOne.header}
                date={columnOne.date}
              />
            );
          })}
        </div>
        <div></div>
        <div className="two-img">
          <img className="coupon" src="./coupon.jpg" alt="" />
          <img className="k-pop" src="./k-pop.png" alt="" />
        </div>
      </div>
      <SeeMore />
      <div>
        <CardTitle />
        {/* {firstTitle.map((title) => {
          return <CardTitle about={title.first} />;
        })} */}

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
      <div>
        <PressTitle />
        <div className="cardsFlex">
          {pressCards.map((oneCard) => {
            return (
              <PressCards
                description={oneCard.category}
                info={oneCard.header}
                date={oneCard.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
