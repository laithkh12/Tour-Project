import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const tourData = [
  {
    id: 1,
    title: "New York",
    desc: "Home to iconic landmarks like the Statue of Liberty, Empire State Building, Central Park, and Times Square, New York is one of the most exciting and diverse cities in the world.",
    image:
      "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
    price: 100,
  },
  {
    id: 2,
    title: "Philippines",
    desc: "The Philippines is a tropical paradise with over 7,000 islands, offering pristine beaches, crystal-clear waters, and rich cultural experiences.",
    image:
      "https://media.cntraveler.com/photos/651eb825507d72b1a01bc8dd/master/w_1920,c_limit/Philippines%20Hero_10.5.23.jpeg",
    tourIsUp: "TOUR IS UP",
  },
  {
    id: 3,
    title: "Bali",
    desc: "Bali, known for its beautiful beaches, stunning temples, and vibrant culture, is a popular destination for relaxation and adventure.",
    image:
      "https://media.cntravellerme.com/photos/64e73087238bdd124237b565/16:9/w_1920%2Cc_limit/GettyImages-1145042281.jpeg",
    price: 300,
  },
  {
    id: 4,
    title: "Egypt",
    desc: "Egypt is a land of ancient history, home to the Pyramids, the Sphinx, and the Nile River, offering a deep dive into one of the world's oldest civilizations.",
    image:
      "https://liveistotravel.com/wp-content/uploads/2024/12/Nile-River-viewpoints.jpg",
    tourIsUp: "TOUR IS UP",
  },
  {
    id: 5,
    title: "Cappadocia",
    desc: "Cappadocia in Turkey is famous for its surreal landscapes, fairy-tale-like rock formations, and the stunning hot air balloon rides at sunrise.",
    image:
      "https://cdn.prod.website-files.com/6613f5a399757c17cec4c187/67a8aad95c517b542d3593f3_Cappadocia%20view.jpeg",
    price: 500,
  },
  {
    id: 6,
    title: "Paris",
    desc: "Paris, the City of Lights, is famous for its art, fashion, cuisine, and iconic landmarks such as the Eiffel Tower and Louvre Museum.",
    image:
      "https://travydays.com/wp-content/uploads/2022/12/%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3.jpg.webp",
    tourIsUp: "TOUR IS UP",
  },
  {
    id: 7,
    title: "Venice",
    desc: "Venice, Italy is known for its romantic canals, stunning architecture, and rich history, making it a unique and unforgettable destination.",
    image: "https://media.timeout.com/images/105412063/1920/1440/image.webp",
    price: 700,
  },
  {
    id: 8,
    title: "India",
    desc: "India offers an incredible blend of rich history, diverse culture, stunning landscapes, and vibrant traditions, from the Taj Mahal to the Himalayas.",
    image:
      "https://res.cloudinary.com/enchanting/f_auto,q_70,w_900,h_490,c_fill/et-web/2015/05/Enchanting-Travels-India-Tours-North-Delhi-HumayunsTombMausoleum-CharBaghGardens.jpg",
    tourIsUp: "TOUR IS UP",
  },
  {
    id: 9,
    title: "Northern Lights",
    desc: "The Northern Lights, or Aurora Borealis, is a natural light display seen in high-latitude regions, creating stunning visual spectacles in the night sky.",
    image:
      "https://cdn.mos.cms.futurecdn.net/6RUWb9NLBGA8v4oQtDgbAL-970-80.jpg.webp",
    price: 900,
  },
  {
    id: 10,
    title: "Fuji Mountain",
    desc: "Mount Fuji in Japan is a symbol of beauty and tranquility, with its symmetrical cone shape and significance in Japanese culture and spirituality.",
    image: "https://japanupclose.web-japan.org/files/100462016.jpeg",
    tourIsUp: "TOUR IS UP",
  },
  {
    id: 11,
    title: "Arashiyama Bamboo Grove",
    desc: "The Arashiyama Bamboo Grove in Kyoto, Japan, offers a serene walk through towering bamboo stalks, creating a mesmerizing and tranquil experience.",
    image:
      "https://arashiyamabambooforest.com/wp-content/uploads/2024/09/arashiyama-bamboo-forest-sagano-kyoto-dense-towering-grove-1.jpeg",
    price: 1100,
  },
  {
    id: 12,
    title: "Antelope Canyon",
    desc: "Antelope Canyon, located in Arizona, USA, is a stunning slot canyon known for its wave-like formations and play of light and shadow.",
    image:
      "https://nationalparkexpress.com/wp-content/uploads/2023/09/leon-liu-_0aOFIW34rw-unsplash-1536x1024.jpg",
    tourIsUp: "TOUR IS UP",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const Header = () => {
  return <header className="header">Tour Route</header>;
};

const Main = () => {
  const tours = tourData;

  return (
    <main className="main">
      {tours.length > 0 && (
        <>
          <div className="renderList">
            {tourData.map((tour) => (
              <Tour key={tour.id} tourObj={tour} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

const Tour = ({ tourObj }) => {
  const { title, image, desc, price, tourIsUp } = tourObj;

  return (
    <div className={`tourWrapper ${tourIsUp ? "grey" : ""}`}>
      <img src={image} alt={title} />
      <div className="tourBottom">
        <h2>{title}</h2>
        <p>{desc}</p>
        <span>{tourIsUp ? tourIsUp : price}</span>
      </div>
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} openHours={openHours} />
      ) : (
        <p>Close</p>
      )}
    </footer>
  );
};

const Order = ({ closeHours, openHours }) => {
  return (
    <div className="order">
      <p>
        We are Open from {openHours}:00 to {closeHours}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
