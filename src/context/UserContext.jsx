import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/apiAuth';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (auth) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser Context must be used within a UserProvider');
  }

  return context;
}

export { UserProvider, useUser };
