import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ButtonType } from "../../ui/Buttons/FullButton.tsx";
import type { RootState } from "../../store/store.ts";
import {
  updateTotalPrice,
  updateTuristsCount,
} from "../../store/state/checkoutSlice.ts";

import FullButton from "../../ui/Buttons/FullButton.tsx";
import CountInput2 from "../../ui/Inputs/CountInput2.tsx";

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const ActionBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
`;

function DetailsActionBar({ price }: { price: any }) {
  const dispatch = useDispatch();
  const { totalPrice, turists } = useSelector(
    (state: RootState) => state.checkout
  );

  useEffect(() => {
    dispatch(updateTotalPrice(price));
  }, []);

  return (
    <ActionBarContainer>
      <CountInput2
        key={`tour-details-checkout`}
        label={"Add turists"}
        boundries={[1, 10]}
        step={1}
        value={turists}
        setValue={(count) => dispatch(updateTuristsCount(count))}
      ></CountInput2>
      <StyledRow>
        <div>
          <p>Total price</p>
          <h4>{totalPrice * turists}$</h4>
        </div>
        <FullButton
          label={"Checkout"}
          iconSrc="arrowRight.svg"
          type={"submit"}
          style={ButtonType.PRIMARY}
        ></FullButton>
      </StyledRow>
    </ActionBarContainer>
  );
}

export default DetailsActionBar;
