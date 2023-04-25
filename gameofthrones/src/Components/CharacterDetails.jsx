import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CharacterDetails.scss";
import { Header } from "./Header";

export const CharacterDetails = () => {
  const { id } = useParams();

  const [detailCharacter, setDetailCharacter] = useState([]);

  const getDetails = () => {
    axios.get("http://localhost:3000/characters/" + id).then((res) => {
      axios
        .get("http://localhost:3000/houses?name_like=" + res.data.house)
        .then((resp) => {
          res.data.house = resp.data[0];
          setDetailCharacter(res.data);
        });
    });
  };

  useEffect(() => {
    getDetails("");
  }, []);

  return (
    <div className="page">
      <div className="container">
        <Header></Header>
        <div className="lista">
          <div className="imagen2">
            <img
              className="pj"
              src={detailCharacter.image}
              alt={detailCharacter.name}
            />
            <h3 className="name">{detailCharacter.name}</h3>
          </div>
          <div className="datos">
            <div className="data">
            <p>Casa</p>
              {detailCharacter.house && detailCharacter.house.image && (
                <img
                  className="casa"
                  src={`http://localhost:3000${detailCharacter.house.image}`}
                  alt={detailCharacter.name}
                />
              )}
            </div>

            <div className="data">
            <p>Alianzas</p>
              <div className="scrollbar">
                <ul>
                  {detailCharacter.alliances &&
                    detailCharacter.alliances.map((alliance, index) => (
                      <li key={index}>{alliance}</li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="data">
              <p>Apariciones</p>
              <div className="scrollbar">
                <ul>
                  {detailCharacter.episodes &&
                    detailCharacter.episodes.map((episode, index) => (
                      <li key={index}>{episode}</li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="data">
            <p>Padres</p>
              <div className="scrollbar">
                <ul>
                  {detailCharacter.parents &&
                    detailCharacter.parents.map((parent, index) => (
                      <li key={index}>{parent}</li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="data">
            <p>Descendientes</p>
              <div className="scrollbar">
                <ul>
                  {detailCharacter.siblings &&
                    detailCharacter.siblings.map((sibling, index) => (
                      <li key={index}>{sibling}</li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="data">
            <p>Titulos</p>
              <div className="scrollbar">
                <ul>
                  <li>{detailCharacter.titles}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
