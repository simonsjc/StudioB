import React, {useState} from 'react';
import LoginForm from './components/LoginForm'

function App() {
  const adminUser = {
   email : "admin@admin.com",
   password: "password"
  }

  const [user, setUser] = useState ({name: "", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    setUser({ 
      name: details.name,
      email: details.email
    });
    if(details.email == adminUser.email && details.password == adminUser.password)
    {
      console.log("Logged In");
    }
     else {
    console.log("Details do not match!");
    setError("Details do not match!");
    }
  }
  

  const Logout = () => {
    setUser({ name:"", email: ""});
  }

  return (
    <div className="App">
      {(user.email !="") ? (
        <div className="WELCOME">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ): (
      <LoginForm Login={Login} error={error}/>
      )}
      </div>
  );

}
export default App;
