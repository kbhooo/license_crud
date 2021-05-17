import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authServise } from "licenseBase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authServise.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "로딩 중..."}
      <footer>&copy; {new Date().getFullYear()} ImLab Licence CRUD</footer>
    </>
  );
}

export default App;