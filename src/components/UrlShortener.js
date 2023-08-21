import React, { useState } from "react";
import UrlShortenerForm from "./UrlShortenerForm";
import UrlShortenerResult from "./UrlShortenerResult";
import axios from "axios";
import { FiAlertCircle } from "react-icons/fi";

export default function UrlShortener() {
  const [resultado, setResultado] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (input) => {
    try {
      setLoader(true);
      setError("");
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`);
      setResultado(res.data.result);
      setLoader(false);
    } catch (error) {
      setError(
        <>
          <FiAlertCircle />
          {`Error al acortar la URL. Por favor, intenta nuevamente.`}
        </>
      );
      setResultado("");
      setLoader(false);
    }
  };

  return (
    <>
      <div className="titulo">
        <h1>Generador de Enlaces Cortos</h1>
        <p>
          ¿Necesitas acortar URLs largas y complicadas? ¡Estás en el lugar
          adecuado! <br />
          Convierte tus enlaces extensos en URLs cortas y fáciles de compartir.
        </p>
      </div>
      <div className="info">
        <UrlShortenerForm onSubmit={fetchData} />
        {loader ? "Cargando..." : <UrlShortenerResult result={resultado} />}
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </>
  );
}
