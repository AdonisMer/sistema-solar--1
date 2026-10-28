export default function CategoryFilter({ categorias, activa, onSelect, conteos }) {
  return (
    <nav className="chips">
      <button
        className={`chip ${activa === "todas" ? "activo" : ""}`}
        onClick={() => onSelect("todas")}
      >
        🌌 Todos ({conteos.todas})
      </button>
      {categorias.map((c) => (
        <button
          key={c.id}
          className={`chip ${activa === c.id ? "activo" : ""}`}
          style={{ "--c": c.color }}
          onClick={() => onSelect(c.id)}
        >
          {c.emoji} {c.nombre} ({conteos[c.id] || 0})
        </button>
      ))}
    </nav>
  );
}
