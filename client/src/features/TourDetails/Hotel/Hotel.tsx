import React from "react";
import { getHotel } from "../../../services/apiHotel.ts";

import HotelDescription from "./HotelDescription.tsx";
import Separator from "../../../ui/Separator.tsx";

import Rooms from "./Rooms.tsx";

function Hotel() {
  const hotel = getHotel();
  console.log(hotel);

  function renderHotelName(name, adress) {
    return (
      <>
        <h4>{name}</h4>
        <p>{adress}</p>
      </>
    );
  }

  return (
    <>
      {renderHotelName(hotel.name, hotel.location)}
      <Separator />
      <HotelDescription
        description={hotel.description}
        advantages={hotel.advantages}
      ></HotelDescription>
      <Separator />
      <Rooms hotel={hotel}></Rooms>
    </>
  );
}

export default Hotel;
