import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

type User = {
  displayName: string;
  email: string;
  photoURL: string;
};

type FirebaseUserState = {
  user: User;
  loading: boolean;
  error: any;
};

const useUserData = (): FirebaseUserState => {
  const [user, loading, error] = useAuthState(auth);

  console.log(user);

  return { user: user, loading: loading, error: error };
};

export default useUserData;
