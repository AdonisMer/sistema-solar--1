// Dibuja el cuerpo celeste con CSS. El tamaño usa escala logarítmica
// para que el Sol no tape a todos y la Luna Fobos aún se vea.
export default function Esfera({ cuerpo, max = 110 }) {
  const tam = Math.min(max, 30 + (Math.log10(cuerpo.diametroKm) - 1) * (max / 8));
  return (
    <div className="esfera-wrap" style={{ height: max }}>
      <div
        className={`esfera ${cuerpo.anillos ? "con-anillos" : ""}`}
        style={{
          width: tam,
          height: tam,
          background: `radial-gradient(circle at 30% 30%, ${cuerpo.c1}, ${cuerpo.c2})`,
          boxShadow: cuerpo.categoria === "otros" && cuerpo.id === 24 ? `0 0 40px ${cuerpo.c2}` : "none",
        }}
      />
    </div>
  );
}
