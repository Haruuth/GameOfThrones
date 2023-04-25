import React from "react";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { useState } from "react";
import "./Characters.scss";

export const Characters = ({ characters }) => {
 
  const [charac, setCharac] = useState("");
  const [showName, setShowName] = useState(null);

  const mouseOver = (charac) => {
    setShowName(charac);
  };

  const mouseLeave = () => {
    setShowName(null);
  };

  const onSearch = (value) =>{
    setCharac(value)
  }


  const filterCharac = characters.filter(
    (pj) =>
      pj.name?.toLowerCase().includes(charac?.toLowerCase()) // Utilizando optional chaining
  );
  


  return (
    <div className="page">
      <div className="container">
      <Header onSearch={onSearch}></Header>
        <div className="characters">
          {filterCharac.map((pj) => (
            <div className="personajes" key={pj.id}>
              <div className="imagen" onMouseEnter={() => mouseOver(pj)} onMouseLeave={() => mouseLeave()}>
                <a href={`/characterdetails/${pj.id}`} ><img src={pj.image}  alt={pj.name}/></a>
                {showName === pj && (<p className="nombre">{pj.name}</p>)}
              </div>
            </div>
          ))}
        </div>
      <Footer></Footer>
      </div>
    </div>
  );

}
