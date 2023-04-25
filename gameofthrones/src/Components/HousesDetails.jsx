import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HousesDetails.scss";
import { Header } from "./Header";

export const HousesDetails = () => {
  const { id } = useParams();

  const [detailHouses, setDetailHouses] = useState([]);

  const getDetails = () => {
    axios.get("http://localhost:3000/houses/" + id).then((res) => {
      setDetailHouses(res.data);
    });
  };

  useEffect(() => {
    getDetails("");
  });

  return (
    <div className="page">
      <div className="container">
        <Header></Header>
        <div className="lista">

          <div className="imagen2">
            <img
              className="pj"
              src={detailHouses.image}
              alt={detailHouses.name}
            />
            <div className="data">{detailHouses.name}</div>
          </div>
          <div className="datos">
            <div className="data">
              <p>Sede</p>
              <div className="scrollbar">
                <ul>
                  <li>{detailHouses.settlement}</li>
                </ul>
              </div>
            </div>

            <div className="data">
              <p>Region</p>
              <ul>
                <li>{detailHouses.region}</li>
              </ul>
            </div>

            <div className="data">
              <p>Alianzas</p>
              <ul>
                {detailHouses.alliances &&
                  detailHouses.alliances.map((alliance, index) => (
                    <li key={index}>{alliance}</li>
                  ))}
              </ul>
            </div>

            <div className="data">
              <p>Religions</p>
              <ul>
                {detailHouses.religions &&
                  detailHouses.religions.map((religion, index) => (
                    <li key={index}>{religion}</li>
                  ))}
              </ul>
            </div>

            <div className="data">
              <p>Foundation</p>
              <ul>
                <li>{detailHouses.foundation}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
