import { useState } from "react";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import "./House.scss";

export const House = ({ houses }) => {
  const [housess, setHousess] = useState("")


  const onSearch = (value) =>{
    setHousess(value)
  }


  const filterHouses = houses.filter(
    (home) =>
      home.name?.toLowerCase().includes(housess?.toLowerCase()) // Utilizando optional chaining
  );


  return (
    <div className="pagee">
      <div className="container2">
        <Header onSearch={onSearch}></Header>
        <div className="houses">
          {filterHouses.map((home) => (
            <div className="homes" key={home.id}>
              <a href={`/housesdetails/${home.id}`}>
                <img src={home.image} alt={home.name} />
              </a>
              <h5>{home.name}</h5>
            </div>
          ))}
        </div>
      <Footer></Footer>
      </div>
    </div>
  );
};
