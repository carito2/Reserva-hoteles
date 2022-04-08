import React from "react";
import bed from "./icons/bed.svg";
import location from "./icons/location.svg";
import { getAvailabilityDateFromUnix } from "./helpers/getAvailabilityDate";
import HotelPrice from "./HotelPrice";

function HotelCard(props) {
  return (
    <article className="hotelContainer">
      <img
        src={props.hotel.photo}
        alt="Imagenes hotel"
        className="hotelPhoto"
      />
      <h2 className="hotelName">{props.hotel.name}</h2>
      <section className="dateAvailability">
        <p className="availability">
          Desde el {getAvailabilityDateFromUnix(props.hotel.availabilityFrom)}
        </p>
        <p className="availability">
          Hasta el {getAvailabilityDateFromUnix(props.hotel.availabilityTo)}
        </p>
      </section>
      <section className="hotelDescription">
        <h4>Descripción</h4>
        <p>{props.hotel.description}</p>
      </section>
      <section className="location">
        <img src={location} alt="Ubicacion hotel" className="icons" />
        <p className="locationParagraph">
          {props.hotel.city}, {props.hotel.country}
        </p>
      </section>
      <section className="hotelCharacteristics">
        <div className="hotelRoooms">
          <img src={bed} alt="Ubicacion hotel" className="icons" />
          <p className="hotelRoomsParagraph">
            {props.hotel.rooms} Habitaciones
          </p>
        </div>
        <div className="hotelPrice">
          <HotelPrice price={props.hotel.price} />
        </div>
      </section>
      <button className="bookHotel">Reservar</button>
    </article>
  );
}
export default HotelCard;
