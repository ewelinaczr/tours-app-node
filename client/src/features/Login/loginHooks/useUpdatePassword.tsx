import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyPassword } from "../../../services/apiUsers.ts";

function useUpdatePassword() {
  const queryClient = useQueryClient();

  const [error, setError] = useState<boolean | undefined>(undefined);

  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: ({
      passwordCurrent,
      password,
      passwordConfirm,
    }: {
      passwordCurrent: string;
      password: string;
      passwordConfirm: string;
    }) => {
      return updateMyPassword({
        passwordCurrent,
        password,
        passwordConfirm,
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

  return { updatePassword, error, isPending };
}

export default useUpdatePassword;
