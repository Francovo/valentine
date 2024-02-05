import React, { useState } from "react";
import "../../styles/Home.scss";

const Home = () => {
  const [widthSI, setWidthSI] = useState(300);
  const [heightSI, setHeightSI] = useState(100);
  const [gif, setGif] = useState("https://giphy.com/embed/c76IJLufpNwSULPk77");
  const [isShowing, setIsShowing] = useState(true);

  const randomGifs = [
    "https://giphy.com/embed/ndP9IIQYeF2OnR6AmF",
    "https://giphy.com/embed/h8UsuceGlmI01g20ik",
    "https://giphy.com/embed/3df1snLOujULcTXvK4",
  ];

  const buttonNO = () => {
    setWidthSI(widthSI + 100);
    setHeightSI(heightSI + 50);

    // Obtén un enlace de gif aleatorio de la lista
    const randomIndex = Math.floor(Math.random() * randomGifs.length);
    setGif(randomGifs[randomIndex]);
  };

  const buttonSI = () => {
    setGif("https://giphy.com/embed/2hgilyq37RtPyaF0pA");
    setIsShowing(false);
  };

  return (
    <div className="containerApp">
      <div
        className="app"
        style={{
          backgroundSize: "cover", // Cubre completamente el contenedor
          backgroundPosition: "center",
          backgroundImage: !isShowing
            ? `url("https://img.freepik.com/vector-premium/fondo-corazones-confeti-diferentes-colores-san-valentin-patron-costuras_175838-3389.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707091200&semt=ais")`
            : `url("https://res.cloudinary.com/aca-geek/image/upload/v1707173187/nwnwcyxd2ho2b0ncek6h.png")`,
        }}
      >
        <div className="GifContainer">
          <iframe src={gif} className="gif"></iframe>
        </div>
        {isShowing ? (
          <>
            <div className="containerText">¿Te gustaría ser mi Valentine?</div>
            <div className="containerButtons">
              <button
                className="SI"
                style={{ width: `${widthSI}px`, height: `${heightSI}px` }}
                onClick={buttonSI}
              >
                Si, te amo
              </button>
              <button
                className="NO"
                style={{ width: "300px", height: "100px" }}
                onClick={buttonNO}
              >
                No, te odio
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              className="containerText"
              style={{
                color: "white",
                border: "solid rgb(150, 33, 72)",
                borderRadius: "10px",
                backgroundColor: "rgb(150, 33, 72)",
                padding: "1rem",
              }}
            >
              Me encantas
              <br />
              <p className="TextSi">Prometo ser el mejor Valentine</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Home;
