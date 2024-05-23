import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth.ts";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [error, setError] = useState<boolean | undefined>(undefined);

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return loginApi({
        email,
        password,
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

  return { login, error, isPending };
}

export default useLogin;
