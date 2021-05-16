import React, { useState } from "react";
import { dbService } from "licenseBase";

const Home = () => {
  const [name, setName] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("TestLicense").add({
      name,
      dateIssued: Date.now(),
    });
    setName("");
  }
  const onChange = (e) => {
    const { 
      target: { value },
    } = e;
    setName(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={name} type="text" placeholder="라이센스 이름을 입력하세요." maxLength={120} />
        <input type="submit" value="생성" />
      </form>
    </div>
  );
};

export default Home;