import { useState } from "react";

export default function SignUpForm({setToken}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello 👋");

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/jason"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const result = await response.json();
      setToken(result.token);
      console.log(result.token);
      //console.log(result);

    } catch (error) {
      setError(error.message);
    }
  }

    return (
      <>
      <div>
        <h2>Sign Up!</h2>
          <form onSubmit={handleSubmit}>
            <label>
               Username: 
               <input
               type="username" 
               value={username}
               id="username" 
               onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
               Password: 
               <input 
               type="password"
               id="password"
               value={password} 
               onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
          </form>
      </div>
      </>
    );
  }