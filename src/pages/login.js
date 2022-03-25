import React from "react";
import {GlobalCtx} from "../App";
import {Route, Link, Switch} from 'react-router-dom';
import Header from "../components/header"



const Login = (props) => {
        const {gState, setGState} = React.useContext(GlobalCtx); //global state destructured
        const {url} = gState;                                  //url to make API call 
    
        // STATE TO SAVE FORM DATA
    //-----------------------------------------
        const blank = {                                      // define the empty objects so we can use uit multiple times 
            username: "",
            password: ""
        }

        const [form, setForm] = React.useState(blank)

        // FUNCTION TO UPDATE STATE 
    //-----------------------------------------
        const handleChange = (e) =>{
            setForm({...form, [e.target.name]: e.target.value})
        }

        // FUNCTION TO HANDLE SUBMIT  
    //-----------------------------------------
        const handleSubmit = (e) => {
            e.preventDefault();
            const {username, password} = form; 

            fetch(`${url}/auth/login`, {
            method:"post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.localStorage.setItem("token", JSON.stringify(data))    // this allows us to locally store the token so that on refresh the user doesnt have to re-enter their login info
                setGState({...gState, token: data.token})                     //include everything already in the Global state and now also include the token
                setForm(blank);                                              // this lets empty the form after it's been submitted
                props.history.push("/")
            })
        }




        // RETURN
    //-----------------------------------------
    return (
        <div> 
            <Header />
            <h1 className="auth"> Login </h1>
            <form onSubmit = {handleSubmit}>
               <input type="text" name="username" placeholder = "try `bob` here" value={form.username} onChange={handleChange} className="authform" placeholder="Enter your email"/>
                 <br/>
               <input type="password" name="password" placeholder = "try `bob` here" value={form.password} onChange={handleChange} className="authform" placeholder="Enter a password"/>
                 <br/>
               <input type="submit" value="Login"  className="authform-button"/>
            </form>

            <p className="para"> Don't have a login yet? Please click here to <Link to = "/signup"> signup</Link>.</p>
            <img src="https://i.pinimg.com/originals/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.png" alt ="vector art of man leaning against a phone. phone displays registration form"/>
   
   </div>
   )
};

export default Login;