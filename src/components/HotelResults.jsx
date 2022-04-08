import React from "react";
import { hotelsData } from "./data";
import HotelCard from "./HotelCard";
import NoResults from "./NoResults";
import filterHotelList from "./helpers/filterHotelList";

function HotelResults({ filterValue, initialStatesFilters }) {
  let filteredHotelList = filterHotelList(
    initialStatesFilters,
    hotelsData,
    filterValue
  );
  return (
    <article className="hotelResults">
      {filteredHotelList.length > 0 ? (
        filteredHotelList.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))
      ) : (
        <NoResults />
      )}
    </article>
  );
}
export default HotelResults;
