import React from "react";
import {
  filtersPlaceholderDate,
  filtersPlaceholderCountry,
  filtersPlaceholderPrice,
  filtersPlaceholderHotelSize
} from "./helpers/filtersPlaceholder";

function Header({ filterValue, initialStatesFilters }) {
  return (
    <header className="headerPage">
      <h1>Hoteles</h1>
      <section className="filterResults">
        <p>{filtersPlaceholderDate(initialStatesFilters, filterValue)}</p>
        <p>{filtersPlaceholderCountry(initialStatesFilters, filterValue)}</p>
        <p>{filtersPlaceholderPrice(initialStatesFilters, filterValue)}</p>
        <p>{filtersPlaceholderHotelSize(initialStatesFilters, filterValue)}</p>
      </section>
    </header>
  );
}
export default Header;
