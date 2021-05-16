import { authServise } from "LicenseBase";
import React from "react";
import { useHistory } from "react-router";

export default () => {
  const history = useHistory();
  const onLogoutClick = () => {
    authServise.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogoutClick}>Log out</button>
    </>
  );
};