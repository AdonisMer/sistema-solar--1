import { useMemo, useState } from "react";
import { CATEGORIAS, CUERPOS } from "./data/cuerpos.js";
import SearchBar from "./components/SearchBar.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import BodyCard from "./components/BodyCard.jsx";
import DetailModal from "./components/DetailModal.jsx";

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [orden, setOrden] = useState("distancia");
  const [seleccionado, setSeleccionado] = useState(null);

  const filtrados = useMemo(() => {
    const q = busqueda.toLowerCase().trim();
    const lista = CUERPOS.filter(
      (c) =>
        (categoria === "todas" || c.categoria === categoria) &&
        (c.nombre.toLowerCase().includes(q) ||
          (c.orbita || "").toLowerCase().includes(q))
    );
    const cmp = {
      nombre: (a, b) => a.nombre.localeCompare(b.nombre),
      tamano: (a, b) => b.diametroKm - a.diametroKm,
      distancia: (a, b) => a.distMkm - b.distMkm,
    };
    return [...lista].sort(cmp[orden]);
  }, [busqueda, categoria, orden]);

  const conteos = useMemo(() => {
    const c = { todas: CUERPOS.length };
    CUERPOS.forEach((x) => (c[x.categoria] = (c[x.categoria] || 0) + 1));
    return c;
  }, []);

  return (
    <main className="app">
      <h1>Explorador del Sistema Solar 🪐</h1>
      <p className="sub">Planetas, lunas y más. Toca una tarjeta para ver los detalles.</p>

      <SearchBar valor={busqueda} onChange={setBusqueda} />
      <CategoryFilter
        categorias={CATEGORIAS}
        activa={categoria}
        onSelect={setCategoria}
        conteos={conteos}
      />

      <div className="barra">
        <span>{filtrados.length} cuerpo(s)</span>
        <label>
          Ordenar:{" "}
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="distancia">Cercanía al Sol</option>
            <option value="tamano">Tamaño (mayor → menor)</option>
            <option value="nombre">A-Z</option>
          </select>
        </label>
      </div>

      {filtrados.length === 0 ? (
        <p className="vacio">No hay resultados 🔭</p>
      ) : (
        <section className="grid">
          {filtrados.map((c) => (
            <BodyCard
              key={c.id}
              cuerpo={c}
              categoria={CATEGORIAS.find((x) => x.id === c.categoria)}
              onClick={() => setSeleccionado(c)}
            />
          ))}
        </section>
      )}

      {seleccionado && (
        <DetailModal
          cuerpo={seleccionado}
          categoria={CATEGORIAS.find((x) => x.id === seleccionado.categoria)}
          onClose={() => setSeleccionado(null)}
        />
      )}
    </main>
  );
}
