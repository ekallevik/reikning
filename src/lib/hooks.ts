import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseUserState } from "./domain";

const useUserData = (): FirebaseUserState => {
  const [user, loading, error] = useAuthState(auth);

  return { user: user, loading: loading, error: error };
};

export default useUserData;
