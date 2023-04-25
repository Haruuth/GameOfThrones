import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export const Header = ({ onSearch }) => {
  // const history = useHistory();
  const location = useLocation();

  const back = () => {
    window.history.back();
  };

  return (
    <div className="iconos">
      <div className="box1">
  {location.pathname.includes("/characterdetails/") || location.pathname.includes("/housesdetails/") ? (
    <div className="box">
      <Link to="/" className="link">
        <button onClick={back}>Volver</button>
      </Link>
    </div>
  ) : null}

  {(location.pathname === "/characters" || location.pathname === "/houses") && (
    <div className="box">
      <input
        onKeyUp={(event) => onSearch(event.target.value)}
        className="input"
        type="text"
        placeholder="&#128269; Buscar..."
      />
    </div>
  )}
</div>



      <div></div>
      <div className="box">
        {location.pathname !== "/" && (
          <Link to="/" className="link">
            {/* ICONO HOME */}
            <img
              src="https://i.pinimg.com/originals/43/67/90/436790cc01143ffb1f728f41a1bb7b41.jpg"
              alt=""
            />
          </Link>
        )}

        <img
          src="https://cdn-icons-png.flaticon.com/512/555/555635.png"
          alt=""
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/555/555417.png"
          alt=""
        />
      </div>
    </div>
  );
};
