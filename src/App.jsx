import React, { useState } from "react";
import "./styles.css";
import "./stylesMobile.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import HotelResults from "./components/HotelResults";
import { initialStatesFilters } from "./components/helpers/initialStatesFilters";

export default function App() {
  const [filterValue, setFilterValue] = useState(initialStatesFilters);
  return (
    <div className="App">
      <article className="searchContainer">
        <Header
          filterValue={filterValue}
          initialStatesFilters={initialStatesFilters}
        />
        <Filters
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          initialStatesFilters={initialStatesFilters}
        />
      </article>
      <HotelResults
        filterValue={filterValue}
        initialStatesFilters={initialStatesFilters}
      />
    </div>
  );
}
