import { createContext } from 'react';

interface UserContextType {
  user: string | null;
  setUser: (user: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;