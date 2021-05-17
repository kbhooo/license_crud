import React, { useEffect, useState } from "react";
import { authServise, dbService } from "licenseBase";
import { useHistory } from "react-router";

export default ({ userObj }) => {
  const history = useHistory();
  const [setNewDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogoutClick = () => {
    authServise.signOut();
    history.push("/");
  };
const onChange = (event) => {
  const {
    target: { value },
  } = event;
  setNewDisplayName(value);
};
const onSubmit = async (event) => {
  event.preventDefault();
  if (userObj.displayName !== newDisplayName) {
    await userObj.updateProfile({
      displayName: newDisplayName,
    });
  }
};
return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogoutClick}>로그아웃</button>
    </>
  )
};