export default function SearchBar({ valor, onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Busca un cuerpo celeste (ej. Júpiter, Titán)"
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
