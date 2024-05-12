import React from "react";
import styled from "styled-components";
import { useState } from "react";

import RoomPreview from "./RoomPreview.tsx";

const Title = styled.h4`
  color: var(--color-brand-purple);
  font-weight: bold;
  margin-bottom: 1rem;
`;

function Rooms({ hotel }) {
  const [selectedRoom, setSelectedRoom] = useState<number[]>([0]);

  return (
    <>
      <Title>Select room</Title>
      {hotel.rooms.map((room, index) => (
        <RoomPreview
          key={`room-${index}`}
          room={room}
          index={index}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        ></RoomPreview>
      ))}
    </>
  );
}

export default Rooms;
