import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";

export default function UrlShortenerResult({ result }) {
  const [iconoCopy, setIconoCopy] = useState(<FiCopy />);
  function handleClick() {
    navigator.clipboard.writeText(result.short_link).then(() => {
      setIconoCopy(<FiCheck />);
      setTimeout(() => {
        setIconoCopy(<FiCopy />);
      }, 1500);
    });
  }
  return (
    <div className="respuesta">
      {result.original_link && (
        <>
          <p className="respuestaTitulo">
            {<FiCheckCircle />} Enlace generado correctamente
          </p>
          <div className="respuestaOriginal">
            <p>{result.original_link}</p>
          </div>
        </>
      )}
      {result.short_link && (
        <div className="respuestaCorta">
          <p>{result.short_link}</p>
          <div
            className="iconoCopiar"
            onClick={handleClick}
            title="Copiar enlace"
          >
            {iconoCopy}
          </div>
        </div>
      )}
      {result.full_short_link && (
        <a
          className="respuestaEnlance"
          href={result.full_short_link}
          target="_blank"
          rel="noopener noreferrer"
          title="Visitar enlace"
        >
          {<FiExternalLink />}
        </a>
      )}
    </div>
  );
}
