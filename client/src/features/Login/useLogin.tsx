import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth.ts";

const mutationKey = ["user-login"];

export function useLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState<boolean | undefined>(undefined);

  const { mutate: login, isPending } = useMutation({
    mutationKey,
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return loginApi({
        email,
        password,
      });
    },
    onSuccess: (data) => {
      if (data) {
        setError(false);
        return navigate("/tours");
      }
      setError(true);
    },
  });

  return { login, error, isPending };
}

export default useLogin;
