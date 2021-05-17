import React from "react";

const Name = ({ nameObj, isOwner }) => {
    const onDeleteClick = () => {
      const ok = window.confirm("해당 라이센스를 삭제하시겠습니까?");
      if(ok){

      }
    }
  return (
    <div>
      <h4>{nameObj.name}</h4>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>라이센스 삭제</button>
          <button>라이센스 수정</button>
        </>
      )}
    </div>
  )
};

export default Name;