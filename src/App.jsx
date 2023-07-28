import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./assets/components/NavBar";
import UncontrolledCarousel from "./assets/components/UncontrolledCarousel";
import { useState, useEffect } from "react";
import BasicCard from "./assets/components/BasicCard";

function App() {
  const [series, setSeries] = useState([]);
  const sendSearch = (search) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("This is data: ", data);
        setSeries(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setSeries(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <NavBar handleClick={sendSearch} />
      <UncontrolledCarousel />
      <div className="cardsContainer">
        {series.map((el) => (
          <BasicCard
            key={el.id || el.show.id}
            image={el.image?.original || el.show.image?.original}
            title={el.name || el.show.name}
            summary={el.summary || el.show.summary}
          />
        ))}
      </div>
    </>
  );
}

export default App;
