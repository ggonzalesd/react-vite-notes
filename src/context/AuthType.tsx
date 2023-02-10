import { User } from "../types/UserType";

interface AuthType {
  user: User | null,
  signin: (username: string, display: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export default AuthType