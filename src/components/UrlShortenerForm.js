import { useState } from "react";

export default function UrlShortenerForm({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const valueInput = e.target.value;
    setInput(valueInput);
  };

  const handleClick = () => {
    onSubmit(input);
    setInput("");
  };

  return (
    <div className="formulario">
      <input
        type="text"
        placeholder="Inserte la URL..."
        value={input}
        onChange={handleChange}
      />
      <div className="boton">
        <button onClick={handleClick} title="Generar enlace">
          Generar
        </button>
      </div>
    </div>
  );
}
