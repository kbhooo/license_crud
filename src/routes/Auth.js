import React, { useState } from 'react';
import { authServise, firebaseInstance } from 'licenseBase';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (e) => {
      const {
        target: { name, value },
      } = e;
      if(name === "email"){
        setEmail(value)
      } else if (name === "password") {
        setPassword(value);
      }
    };
    const onSubmit = async(e) => {
      e.preventDefault();
      try{
          let data;
        if(newAccount){
          data = await authServise.createUserWithEmailAndPassword(
            email, 
            password
          );
        } else {
          data = await authServise.signInWithEmailAndPassword(
            email, 
            password
          );
        }
        console.log(data);
      } catch(error){
        setError(error.message);
      }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
      const {
        target: { name },
      } = event;
      let provider;
      if (name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (name === "github") {
        provider = new firebaseInstance.auth.GithubAuthProvider();
      }
      const data = await authServise.signInWithPopup(provider);
      console.log(data);
    };
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input 
            name="email" 
            type="email" 
            placeholder="이메일" 
            required 
            value={email}
            onChange={onChange}
          />
          <input 
            name="password"
            type="password" 
            placeholder="비밀번호"
            required
            value={password}
            onChange={onChange} 
          />
          <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
          {error}
        </form>
        <span onClick={toggleAccount}>{newAccount ? "로그인 하기" : "회원가입 하기"}</span>
        <button onClick={onSocialClick} name="google">구글로 계속하기</button>
      </div>
    );
  };

export default Auth;