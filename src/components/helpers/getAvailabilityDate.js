const daysOfTheWeek = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
];
const monthsOfTheYear = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];

export const getAvailabilityDate = (date) => {
  let currentDate = new Date(date + " 00:00:00");
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let day = currentDate.getDay();
  let numberDay = currentDate.getDate();
  let nameOfDay = daysOfTheWeek[day];
  let nameOfMonth = monthsOfTheYear[month];
  return `${nameOfDay}, ${numberDay} de ${nameOfMonth} de ${year}.`;
};

export const getAvailabilityDateFromUnix = (date) => {
  let currentDate = new Date(date);
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let day = currentDate.getDay();
  let numberDay = currentDate.getDate();
  let nameOfDay = daysOfTheWeek[day];
  let nameOfMonth = monthsOfTheYear[month];
  return `${nameOfDay}, ${numberDay} de ${nameOfMonth} de ${year}.`;
};

export const getUnixTimeFromString = (date) => {
  const newDate = new Date(date + " 00:00:00");
  return newDate.getTime();
};

export const getUnixTimeHourZero = (date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate.getTime();
};
