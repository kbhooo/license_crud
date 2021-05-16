import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authServise } from "LicenseBase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authServise.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "로딩 중..."}
      <footer>&copy; {new Date().getFullYear()} ImLab Licence CRUD</footer>
    </>
  );
}

export default App;