import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedRooms,
  updateTotalPrice,
} from "../../../store/state/checkoutSlice.ts";
import type { ReactElement } from "react";
import type { RootState } from "../../../store/store.ts";

import ToggleButton from "../../../ui/Buttons/ToggleButton.tsx";

const roomFeatures = [
  { label: "Wifi", icon: "wifi.svg" },
  { label: "City view", icon: "balcony.svg" },
  { label: "Tea/Coffee maker", icon: "coffeMaker.svg" },
  { label: "Air conditioning", icon: "airCon.svg" },
  { label: "Minibar", icon: "miniBar.svg" },
  { label: "Tv", icon: "tv.svg" },
  { label: "Safe", icon: "safe.svg" },
  { label: "Bathtube", icon: "bathtube.svg" },
  { label: "Soundproofing", icon: "ear.svg" },
];

const RoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  border-top: 1px solid var(--color-grey-0);
  margin-top: 1.4rem;
  padding-top: 1rem;
`;
const Row = styled.div`
  display: flex;
  gap: 2rem;
`;

const SmallRow = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const SmallColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.6rem;
`;

const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  gap: 0.6rem;
  min-width: 10rem;
  margin-bottom: 1rem;
`;

const Price = styled.h5`
  font-size: 1.2rem;
  white-space: nowrap;
`;

const Guests = styled.p`
  margin-right: 0.6rem;
  font-weight: bold;
`;

const Person = styled.img`
  width: 1.4rem;
`;

const Feature = styled.img`
  width: 1.6rem;
  margin-right: 0.2rem;
`;

const Description = styled.p`
  text-align: justify;
  text-justify: inter-word;
`;

const SelectRoomButton = styled.div`
  align-self: flex-end;
  justify-self: end;
`;

function renderRoomFeature(feature: string, index: number) {
  const roomFeature = roomFeatures.find((el) => el.label === feature);
  if (!roomFeature) return null;

  return (
    <SmallRow key={`room-feture-${index}`}>
      <Feature src={`/${roomFeature.icon}`} alt={roomFeature.label} />
      <span>{roomFeature.label}</span>
    </SmallRow>
  );
}

function renderRoomCapacity(room) {
  let guests = room.guests;
  let guestsIcon: ReactElement[] = [];
  while (guests) {
    guestsIcon.push(
      <Person
        key={`person-icon-${guests}`}
        src={"/person.svg"}
        alt="Room capacity"
      />
    );
    guests--;
  }
  return guestsIcon;
}

function RoomPreview({ room, index }: { room: any; index: number }) {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state: RootState) => state.checkout);

  return (
    <RoomContainer>
      <Column>
        <h5>{room.name}</h5>
        <Description>{room.description}</Description>
        <Row>
          {room.features.map((feature, index) =>
            renderRoomFeature(feature, index)
          )}
        </Row>
      </Column>
      <ActionBar>
        <SmallColumn>
          {room.default ? <Price>{room.default}</Price> : null}
          <Price>{room.price}</Price>
          <SmallRow>
            <Guests>{room.guests}x</Guests>
            {renderRoomCapacity(room)}
          </SmallRow>
        </SmallColumn>
        <SelectRoomButton>
          <ToggleButton
            itemIndex={index}
            itemValue={Number(room.price.replace(/\D/g, ""))}
            selectedItems={rooms}
            updateValue={(roomPrice: number) =>
              dispatch(updateTotalPrice(roomPrice))
            }
            updateSelectedItems={(roomIndex: number) =>
              dispatch(updateSelectedRooms(roomIndex))
            }
          ></ToggleButton>
        </SelectRoomButton>
      </ActionBar>
    </RoomContainer>
  );
}

export default RoomPreview;
