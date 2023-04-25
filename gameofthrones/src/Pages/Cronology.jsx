// import React, { useState } from "react";
// import { Footer } from "../Components/Footer";
// import { Header } from "../Components/Header";
// import "./Cronology.scss"

// export const Cronology = ({ characters }) => {
//   const [ageAscending, setAgeAscending] = useState(true);
//   const orderCharacters = [...characters].sort((a, b) =>
//     ageAscending ? a.age - b.age : b.age - a.age
//   );

//   const orderByAge = () => {
//     setAgeAscending(!ageAscending);
//   };

//   return (
//     <div className="page">
//       <Header />
//       <button onClick={orderByAge}>
//         {ageAscending ? "Order Descendent" : "Order Ascendent"}
//       </button>
//       <div className="container__chr">
//         <ul>
//         <div className="characters__chr">
          
//         <li>{orderCharacters.map((charac) => (
//             <div className="personajes__chr" key={charac.id}>
//               <div className="imagen__chr">
//                 <img src={charac.image} alt={charac.name} />
//                 {<p className="edad__chr">{charac.age}</p>}
//               </div>
//             </div>
//           ))}</li>
//         </div>
//           </ul>
//       <Footer />
//       </div>
//     </div>

//   );
// };





import React, { useState } from "react";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import "./Cronology.scss"

export const Cronology = ({ characters }) => {
  const [ageAscending, setAgeAscending] = useState(true);
  const orderCharacters = [...characters].sort((a, b) =>
    ageAscending ? a.age - b.age : b.age - a.age
  );

  const orderByAge = () => {
    setAgeAscending(!ageAscending);
  };

  return (
    // Contenedor principal
    <div className="page">
      {/* Encabezado */}
      <Header />

      {/* Botón para ordenar por edad */}
      <button onClick={orderByAge}>
        {ageAscending ? "Order Descendent" : "Order Ascendent"}
      </button>

      {/* Contenedor de la lista de personajes */}
      <div className="container__chr">
        <ul className="characters__chr">
          {/* Lista de personajes ordenada */}
          {orderCharacters.map((charac) => (
            <li className="personajes__chr" key={charac.id}>
                {/* Imagen y edad del personaje */}
                <div className="imagen__chr">
                  <img src={charac.image} alt={charac.name} />
                  {<p className="edad__chr">{charac.age}</p>}
                </div>
             
            </li>
          ))}
        </ul>

      {/* Pie de página */}
      <Footer />
      </div>
    </div>
  );
};

