import logo from './icon-256x256.png';
import './App.css';
import { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      'http://localhost:4000/register', {
        method: "post",
        body: JSON.stringify({name, email}),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      try{
        result = await result.json();
        if (result){
          alert("Welcome, Brad. I can do that");
          setEmail("");
          setName("");
        }
        console.warn(result);
      }
      catch(e){
        console.log(e.message);
        alert("I'm sorry Brad, I can't do that");
      }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
        <p>
          Hello, Brad.
        </p>
        <form action="">
        <input type="text" placeholder="name"
        value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="email"
        value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit"
        onClick={handleOnSubmit}>submit</button>
        <button onClick={ async(e) =>  {
            console.log("Testing")
            e.preventDefault();
            let result = await fetch(
              'http://localhost:4000/test', {
                method: "post",
                headers: {
                  'Content-Type' : 'application/json'
                }
              })
            try{
              result = await result.json();
              console.warn(result);
            } catch(e){
              console.log(e.message);
              alert("I'm sorry Brad, I can't do that");
            }
        }
        } >Test</button>
      </form>       
      </header>
      
    </div>
   
  );
}

export default App;
