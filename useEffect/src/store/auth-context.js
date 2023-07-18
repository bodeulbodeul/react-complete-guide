import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect를 활용해 localStorage에 로그인 여부 확인
  useEffect(() => {
    const isLoggedInInStorage = localStorage.getItem("isLoggedIn");
    isLoggedInInStorage && setIsLoggedIn(isLoggedInInStorage);
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
