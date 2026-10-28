import { useEffect } from "react";
import Esfera from "./Esfera.jsx";

export default function DetailModal({ cuerpo, categoria, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const filas = [
    ["Diámetro", `${cuerpo.diametroKm.toLocaleString("es")} km`],
    [
      cuerpo.orbita ? `Orbita a` : "Distancia al Sol",
      cuerpo.orbita
        ? cuerpo.orbita
        : cuerpo.distMkm === 0
        ? "—"
        : `${cuerpo.distMkm.toLocaleString("es")} millones de km`,
    ],
    ["Duración del día", cuerpo.dia],
    ["Duración del año", cuerpo.anio],
    ["Lunas", cuerpo.lunas],
  ];

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        style={{ "--c": categoria.color }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={cuerpo.nombre}
      >
        <button className="cerrar" onClick={onClose} aria-label="Cerrar">✕</button>
        <Esfera cuerpo={cuerpo} max={140} />
        <h2>{cuerpo.nombre}</h2>
        <span className="tag">{categoria.emoji} {categoria.nombre}</span>
        <table>
          <tbody>
            {filas.map(([k, v]) => (
              <tr key={k}>
                <th>{k}</th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="curioso">💡 {cuerpo.curioso}</p>
      </div>
    </div>
  );
}
