import React from "react";
import dolar from "./icons/dolar.svg";

function HotelPrice({ price }) {
  switch (price) {
    case 1:
      return (
        <>
          <img src={dolar} alt="Precio" className="priceOn" />
          <img src={dolar} alt="Precio" className="priceOff" />
          <img src={dolar} alt="Precio" className="priceOff" />
          <img src={dolar} alt="Precio" className="priceOff" />
        </>
      );
    case 2:
      return (
        <>
          <img src={dolar} alt="Precio" className="priceOn" />
          <img src={dolar} alt="Precio" className="priceOn" />
          <img src={dolar} alt="Precio" className="priceOff" />
          <img src={dolar} alt="Precio" className="priceOff" />
        </>
      );
    case 3:
      return (
        <>
          <img src={dolar} alt="Precio" className="priceOn" />
          <img src={dolar} alt="Precio" className="priceOn" />
          <img src={dolar} alt="Precio" className="priceOn" />
          <img src={dolar} alt="Precio" className="priceOff" />
        </>
      );
    case 4:
      return (
        <>
          <img src={dolar} alt="Precio" className="priceOn" />
          <img src={dolar} alt="Precio" className="priceOn" />
          <img src={dolar} alt="Precio" className="priceOn" />
          <img src={dolar} alt="Precio" className="priceOn" />
        </>
      );
    default:
      return (
        <>
          <img src={dolar} alt="Precio" className="priceOff" />
          <img src={dolar} alt="Precio" className="priceOff" />
          <img src={dolar} alt="Precio" className="priceOff" />
          <img src={dolar} alt="Precio" className="priceOff" />
        </>
      );
  }
}

export default HotelPrice;
