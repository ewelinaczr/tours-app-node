import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../../services/apiAuth.ts";

function useSignUp() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [error, setError] = useState<boolean | undefined>(undefined);

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({
      name,
      email,
      password,
      passwordConfirm,
    }: {
      name: string;
      email: string;
      password: string;
      passwordConfirm: string;
    }) => {
      return signUpApi({
        name,
        email,
        password,
        passwordConfirm,
        role: "user",
      });
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.setQueryData(["user"], data.user);
        setError(false);
        return navigate("/tours", { replace: true });
      }
      setError(true);
    },
  });

  return { signUp, error, isPending };
}

export default useSignUp;
