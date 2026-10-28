import Esfera from "./Esfera.jsx";

export default function BodyCard({ cuerpo, categoria, onClick }) {
  return (
    <button className="card" style={{ "--c": categoria.color }} onClick={onClick}>
      <Esfera cuerpo={cuerpo} />
      <h2>{cuerpo.nombre}</h2>
      <p className="estudio">
        {cuerpo.orbita ? `Luna de ${cuerpo.orbita}` : `${cuerpo.diametroKm.toLocaleString("es")} km`}
      </p>
      <span className="tag">{categoria.nombre}</span>
    </button>
  );
}
