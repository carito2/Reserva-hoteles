import {
  getUnixTimeFromString,
  getUnixTimeHourZero
} from "./getAvailabilityDate";

const filterHotelList = (initialStatesFilters, hotelsData, filterValue) => {
  const newList = hotelsData
    .filter((hotel) => {
      if (
        filterValue.dateFrom !== initialStatesFilters.dateFrom &&
        filterValue.dateTo !== initialStatesFilters.dateTo
      ) {
        let dateFromUnix = getUnixTimeFromString(filterValue.dateFrom);
        let dateToUnix = getUnixTimeFromString(filterValue.dateTo);
        return (
          getUnixTimeHourZero(hotel.availabilityFrom) <= dateFromUnix &&
          getUnixTimeHourZero(hotel.availabilityTo) >= dateToUnix
        );
      }
      return hotel;
    })
    .filter((hotel) => {
      if (filterValue.country !== initialStatesFilters.country) {
        return hotel.country.toLowerCase() === filterValue.country;
      }
      return hotel;
    })
    .filter((hotel) => {
      if (filterValue.price !== initialStatesFilters.price) {
        return hotel.price.toString() === filterValue.price;
      }
      return hotel;
    })
    .filter((hotel) => {
      if (filterValue.hotelSize !== initialStatesFilters.hotelSize) {
        if (filterValue.hotelSize === "little") {
          return hotel.rooms <= 10;
        } else if (filterValue.hotelSize === "medium") {
          return hotel.rooms > 10 && hotel.rooms <= 20;
        } else {
          return hotel.rooms > 20;
        }
      }
      return hotel;
    });
  return newList;
};
export default filterHotelList;
