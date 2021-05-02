import { createContext } from "react";

export const UserContext = createContext({
  user: null,
  loading: null,
  error: null,
});
