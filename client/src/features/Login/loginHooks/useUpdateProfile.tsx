import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyProfile } from "../../../services/apiUsers.ts";

function useUpdateProfile() {
  const queryClient = useQueryClient();

  const [error, setError] = useState<boolean | undefined>(undefined);

  const { mutate: updateMy, isPending } = useMutation({
    mutationFn: ({
      name,
      email,
      photo,
    }: {
      name: string;
      email: string;
      photo: string;
    }) => {
      return updateMyProfile({
        name,
        email,
        photo,
      });
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.setQueryData(["user"], data.user);
        setError(false);
        return;
      }
      setError(true);
    },
  });

  return { updateMy, error, isPending };
}

export default useUpdateProfile;
