import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTour } from "../../services/apiTours.ts";

import Photo from "./Photo.tsx";
import Spinner from "../../ui/Spinner.tsx";
import TourHeader from "./TourHeader.tsx";
import TourNavigationBar from "./TourNavigationBar.tsx";
import DetailsActionBar from "./DetailsActionBar.tsx";
import Separator from "../../ui/Separator.tsx";

const ProtosPreview = styled.div`
  position: absolute;
  top: 0;
  margin: auto;
`;

const PhotosContainer = styled.div<{ $photosLoaded: boolean }>`
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.$photosLoaded ? "visible" : "hidden")};
`;

const TourInfo = styled.div`
  margin-left: 33vw;
  padding: 0 6rem;
`;

export const Subtitle = styled.div`
  color: var(--color-brand-purple);
  font-family: Boby;
`;
export const Favorite = styled.img`
  position: absolute;
  display: flex;
  right: 1.4rem;
  top: 1.4rem;
  height: 2.2rem;
  width: 2.2rem;
`;

function TourDetails() {
  const { id } = useParams();
  const [photosLoaded, setPhotosLoaded] = useState<boolean>(false);
  let loadedPhotosCount = 0;

  const { isLoading, data } = useQuery({
    queryKey: ["tour", id],
    queryFn: id ? async () => getTour(id) : undefined,
  });

  if (isLoading || !data) {
    return <Spinner />;
  }

  function handleLoadedPhoto() {
    loadedPhotosCount++;
    if (loadedPhotosCount === data?.photos.length) {
      setPhotosLoaded(true);
    }
  }

  function renderPhotosPreview() {
    return (
      <ProtosPreview>
        {!photosLoaded ? <Spinner /> : null}
        <PhotosContainer $photosLoaded={photosLoaded}>
          {data?.photos.map((photo, index) => (
            <Photo
              key={`tour-photo-${index}`}
              photoUrl={photo}
              handleLoaded={handleLoadedPhoto}
            ></Photo>
          ))}
        </PhotosContainer>
      </ProtosPreview>
    );
  }

  return (
    <>
      {renderPhotosPreview()}
      <TourInfo>
        <TourHeader data={data}></TourHeader>
        <TourNavigationBar></TourNavigationBar>
        <Outlet />
        <Separator />
        <DetailsActionBar price={data.price}></DetailsActionBar>
      </TourInfo>
    </>
  );
}

export default TourDetails;
