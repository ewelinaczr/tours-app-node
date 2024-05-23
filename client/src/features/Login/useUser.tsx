import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../../services/apiUsers.ts";

const queryKey = ["user"];

function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey,
    queryFn: async () => getMyProfile(),
  });
  return { user, isLoading, error };
}

export default useUser;
