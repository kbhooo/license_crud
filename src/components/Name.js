import React, { useState } from "react";
import { dbService } from "licenseBase";

const Name = ({ nameObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(nameObj.name);
    const onDeleteClick = async () => {
      const ok = window.confirm("해당 라이센스를 삭제하시겠습니까?");
      if(ok){
        await dbService.doc(`names/${nameObj.id}`).delete();
      }
    };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.doc(`names/${nameObj.id}`).update({
      name:newName,
    });
    setEditing(false);
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewName(value);
  };
  return (
    <div>
      {
        editing ? (
          <>
            <form onSubmit={onSubmit}>
              <input 
                type="text"
                placeholder="라이센스 수정하기"
                value={newName} 
                required
                onChange={onChange}
              />
              <input type="submit" value="라이센스 수정" />
            </form>
            <button onClick={toggleEditing}>취소하기</button>
          </>
          ) : (
          <>
            <h4>{nameObj.name}</h4>
              {isOwner && (
                <>
                  <button onClick={onDeleteClick}>라이센스 삭제</button>
                  <button onClick={toggleEditing}>라이센스 수정</button>
                </>
              )}
          </>
        )}
    </div>
  )
};

export default Name;