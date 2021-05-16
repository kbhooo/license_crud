import React from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (e) => {
      const {target: {name, value}} = e;
      if(name === "email"){
        setEmail(value)
      } else if (name === "password") {
        setPassword(value);
      }
    };
    const onSubmit = (e) => {
      e.preventDefault();
    };
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input 
            name="email" 
            type="text" 
            placeholder="Email" 
            required value={email}
            onCange={onCange}
          />
          <input 
            name="password"
            type="password" 
            placeholder="Password" 
            required
            value="password"
            onCange={onCange} 
          />
          <input type="submit" value="Login" />
        </form>
        <button>Continue with Google</button>
      </div>
    );
}

export default Auth;