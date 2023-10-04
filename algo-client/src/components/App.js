import logo from '../icon-256x256.png';
import '../App.css';
import NavBar from './Navbar';
import AlgorithmTest from './AlgorithmTest';
import { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      'http://localhost:5000/register', {
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
      <NavBar />
      <header className="App-header">
        <img src={logo} alt=''/>
        <p>
          Hello, Brad.
        </p>
        <br></br>
        <form action="">
        <input type="text" className="input-field" id='input-thing' placeholder="name"
        value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" className="input-field" id='input-thing' placeholder="email"
        value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit"
        onClick={handleOnSubmit}>submit</button>
        <button onClick={ async(e) =>  {
            console.log("Testing")
            e.preventDefault();
            let result = await fetch(
              'http://localhost:5000/test', {
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
      <br></br>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}} >
        <AlgorithmTest number={1}/>
        <AlgorithmTest number={2}/> 
      </div>  
      </header>
      
    </div>
   
  );
}

export default App;
