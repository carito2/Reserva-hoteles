import sadFace from "./icons/sadFace.svg";

function NoResults() {
  return (
    <article className="noResults">
      <img src={sadFace} alt="Habitación hotel" className="imageNoResults" />
      <p className="infoNoResults">
        Lo sentimos, no existen resultados para tu busqueda.
      </p>
    </article>
  );
}
export default NoResults;
