import { createContext, useCallback,  useState } from "react";
import firebase from "../services/firebase";

export const AuthContext = createContext();

const Auth = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

 
  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  const logout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("deslogou");
        setIsUserLoggedIn(false);
        setUser(null);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isUserLoggedIn,
        setIsUserLoggedIn,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
