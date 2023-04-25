import "./HomePage.scss";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const HomePage = () => {
  window.scrollTo(0, 0);

  return (
    <div className="imagenFondo">
        <div className="page1">
      
          <Header></Header>
        
        <div className="imagenLetras">
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/11/Game-of-Thrones-logo.png"
            alt="gameofthronesimage"
          />
        </div>
        
          <Footer></Footer>
        
      </div>
    </div>
  );
};
