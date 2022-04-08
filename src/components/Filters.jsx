import React from "react";
import trash from "./icons/trash.svg";

function Filters({ filterValue, setFilterValue, initialStatesFilters }) {
  const dateNow = new Date().toISOString().split("T")[0];
  const eventTrigger = (e) => {
    setFilterValue({ ...filterValue, [e.target.name]: e.target.value });
  };
  const setFilters = (e) => {
    setFilterValue(initialStatesFilters);
  };
  return (
    <nav className="pageFilters">
      <section className="dateFilters">
        <label htmlFor="dateFrom">
          Desde
          <input
            type="date"
            className="inputDate"
            name="dateFrom"
            id="dateFrom"
            value={filterValue.dateFrom}
            min={dateNow}
            onChange={eventTrigger}
          />
        </label>
        <label htmlFor="dateTo">
          Hasta
          <input
            type="date"
            className="inputDate"
            name="dateTo"
            id="dateTo"
            value={filterValue.dateTo}
            min={filterValue.dateFrom}
            onChange={eventTrigger}
          />
        </label>
      </section>
      <section className="selectionFilters">
        <label htmlFor="country">
          Ubicación
          <select
            name="country"
            id="country"
            className="countrySelection"
            value={filterValue.country}
            onChange={eventTrigger}
          >
            <option value="todos los paises">Todos los países</option>
            <option value="argentina">Argentina</option>
            <option value="chile">Chile</option>
            <option value="uruguay">Uruguay</option>
            <option value="brasil">Brasil</option>
          </select>
        </label>
        <label htmlFor="price">
          Precio
          <select
            name="price"
            id="price"
            className="priceSelection"
            value={filterValue.price}
            onChange={eventTrigger}
          >
            <option value={initialStatesFilters.price}>Cualquier precio</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </label>
        <label htmlFor="hotelSize">
          Tamaño hotel
          <select
            name="hotelSize"
            id="hotelSize"
            className="hotelSizeSelection"
            value={filterValue.hotelSize}
            onChange={eventTrigger}
          >
            <option value={initialStatesFilters.hotelSize}>
              Cualquier tamaño
            </option>
            <option value="little">Pequeño</option>
            <option value="medium">Mediano</option>
            <option value="big">Grande</option>
          </select>
        </label>
        <button className="resetFilters" onClick={setFilters}>
          <img
            src={trash}
            alt="Limpiar filtros"
            className="iconsReset"
            name="resetFilters"
          />{" "}
          Limpiar
        </button>
      </section>
    </nav>
  );
}

export default Filters;
