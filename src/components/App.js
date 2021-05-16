import React, { useState } from 'react';
import AppRouter from 'components/Router';
import { authServise } from "LicenseBase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authServise.currentUser);
  return (
  <>
    <AppRouter isLoggedIn={isLoggedIn} />;
    <footer>&copy; {new Date().getFullYear()} ImLab Licence CRUD</footer>
  </>
  );
}

export default App;