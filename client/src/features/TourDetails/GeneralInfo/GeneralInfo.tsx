import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTour } from "../../../services/apiTours.ts";
import IconInfo from "./IconInfo.tsx";
import Separator from "../../../ui/Separator.tsx";
import Description from "./Description.tsx";
import Plan from "./Plan.tsx";

function GeneralInfo() {
  const { id } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["tour", id],
    queryFn: id ? async () => getTour(id) : undefined,
  });

  console.log(data);

  if (!data) {
    return <h1>no data</h1>;
  }

  return (
    <div>
      <IconInfo tour={data}></IconInfo>
      <Separator />
      <Description description={data.descrition}></Description>
      <Separator />
      <Plan plan={data.tourPlan} attractions={data.attractions}></Plan>
    </div>
  );
}

export default GeneralInfo;
