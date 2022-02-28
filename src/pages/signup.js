import React from "react";
import {GlobalCtx} from "../App";
import {Route, Link, Switch} from 'react-router-dom';
import Header from "../components/header"



const Signup = (props) => {
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

            fetch(`${url}/auth/signup`, {
            method:"post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setForm(blank);                                              // this lets empty the form after it's been submitted
                props.history.push("/login")
            })
        }




        // RETURN
    //-----------------------------------------
    return (
        <div> 
             <Header />
            <h1 className="auth"> Sign up</h1>
            <form onSubmit = {handleSubmit}>
               <input type="text" name="username" value={form.username} onChange={handleChange} className="authform" placeholder="Enter your email"/>
               <br/>
               <input type="password" name="password" value={form.password} onChange={handleChange} className="authform" placeholder="Enter a password"/>
                <br/>
               <input type="submit" value="Signup" className="authform-button" />
            </form>

            <p className="para"> Already have a login? Please click here to <Link to = "/login"> login</Link>.</p>
            <img src="https://farmsoc.com/wp-content/uploads/2020/04/mobile-login-concept-illustration_114360-135.jpg"/>
   </div>
   )
};

export default Signup;