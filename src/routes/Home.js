import React, { useEffect, useState } from "react";
import { dbService } from "licenseBase";

const Home = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const getNames = async()=>{
    const dbNames = await dbService.collection("Test Licenses").get();
    dbNames.forEach((document) => {
      const nameObject = {
        ...document.data(),
        id: document.id,
      };
      setNames((prev) => [nameObject, ...prev]);
    });
  };
  useEffect(() => {
    getNames();
  }, [])
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("Test Licenses").add({
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
  console.log(names);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={name}
          onChange={onChange}
          type="text"
          placeholder="라이센스 이름을 입력하세요."
          maxLength={120}
        />
        <input type="submit" value="생성" />
      </form>
      <div>
        {names.map((name) => (
          <div key={name.id}>
            <h4>{name.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;