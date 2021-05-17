import React, { useEffect } from "react";
import { authServise, dbService } from "licenseBase";
import { useHistory } from "react-router";

export default ({ userObj }) => {
  const history = useHistory();
  const onLogoutClick = () => {
    authServise.signOut();
    history.push("/");
  };
  const getMyNames = async() => {
    const names = await dbService
      .collection("Test License")
      .where("masterUserId", "==", userObj.uid)
      .orderBy("dateIssued")
      .get();
    console.log(names.docs.map(doc => doc.data()));
  };

  useEffect(()=> {
    getMyNames();
  }, [])
  return (
    <>
      <button onClick={onLogoutClick}>Log out</button>
    </>
  );
};