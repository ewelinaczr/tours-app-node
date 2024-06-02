import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../../services/apiAuth.ts";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: (status) => {
      if ((status = "success")) {
        queryClient.removeQueries({ queryKey: ["user"], exact: true });
        return navigate("/login", { replace: true });
      }
    },
  });

  return { logout };
}

export default useLogout;
