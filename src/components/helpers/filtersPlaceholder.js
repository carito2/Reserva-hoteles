import { getAvailabilityDate } from "./getAvailabilityDate";

const price = [
  "De cualquier precio",
  "Económico",
  "Confort",
  "Lujoso",
  "Magnifico"
];

export const filtersPlaceholderDate = (initialStatesFilters, filterValue) => {
  if (
    initialStatesFilters.dateFrom !== filterValue.dateFrom &&
    initialStatesFilters.dateTo === filterValue.dateTo
  ) {
    return `Desde el ${getAvailabilityDate(filterValue.dateFrom)}`;
  } else if (
    initialStatesFilters.dateFrom !== filterValue.dateFrom &&
    initialStatesFilters.dateTo !== filterValue.dateTo
  ) {
    return `Desde el ${getAvailabilityDate(filterValue.dateFrom)} Hasta el
      ${getAvailabilityDate(filterValue.dateTo)}`;
  } else if (
    initialStatesFilters.dateFrom === filterValue.dateFrom &&
    initialStatesFilters.dateTo !== filterValue.dateTo
  ) {
    return `Hasta el ${getAvailabilityDate(filterValue.dateTo)}`;
  }
  return `En ${initialStatesFilters.dateFrom}`;
};

export const filtersPlaceholderCountry = (
  initialStatesFilters,
  filterValue
) => {
  if (initialStatesFilters.country !== filterValue.country) {
    return `En ${filterValue.country}`;
  }
  return `En ${initialStatesFilters.country}`;
};

export const filtersPlaceholderPrice = (initialStatesFilters, filterValue) => {
  if (initialStatesFilters.price !== filterValue.price) {
    return price[filterValue.price];
  }
  return price[initialStatesFilters.price];
};

export const filtersPlaceholderHotelSize = (
  initialStatesFilters,
  filterValue
) => {
  if (initialStatesFilters.hotelSize !== filterValue.hotelSize) {
    if (filterValue.hotelSize === "little") {
      return "De tamaño pequeño";
    } else if (filterValue.hotelSize === "medium") {
      return "De tamaño mediano";
    } else {
      return "De tamaño grande";
    }
  }
  return initialStatesFilters.hotelSize;
};
