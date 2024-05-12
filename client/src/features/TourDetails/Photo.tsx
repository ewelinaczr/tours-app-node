import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledPhoto = styled.img<{ $loadingError: boolean }>`
  height: fit-content;
  width: 33vw;
  display: ${(props) => (props.$loadingError ? "none" : "block")};
`;

function Photo({
  photoUrl,
  handleLoaded,
}: {
  photoUrl: string;
  handleLoaded: () => void;
}) {
  const [loadingError, setLoadingError] = useState<boolean>(false);

  return (
    <StyledPhoto
      src={photoUrl}
      onLoad={() => handleLoaded()}
      onError={() => {
        setLoadingError(true);
        handleLoaded();
      }}
      $loadingError={loadingError}
    ></StyledPhoto>
  );
}

export default Photo;
