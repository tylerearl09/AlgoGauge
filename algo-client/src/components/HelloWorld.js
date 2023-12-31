import { useState } from 'react'
import AlgorithmTest from './AlgorithmTest';
import logo from '../icon-256x256.png';
export default function HelloWorld(){
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
      	<AlgorithmTest />     
      </header>
    );
}