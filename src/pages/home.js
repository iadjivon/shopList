import React from "react";
import Signup from "./signup";
import Header from "../components/header"
import {Route, Link, Switch} from 'react-router-dom';



const Home = (props) => {
        // const {gState, setGState} = React.useContext(GlobalCtx); //global state destructured
        // const {url} = gState;                                  //url to make API call 
    
        
    return (

      
        <div className="home-text home-boxes">

         <div>
           <h1> Add, Delete, DeleteAll.</h1>
            <h3> Login or Signup to create and keep track of your shopping list. </h3>

            <div className="mock-auth-home"> 
            <div className="mock-auth-reg">
            <Link to ="/signup"> <h2> Sign up</h2> </Link>
            </div>

            <div className="mock-auth-reg">
           <Link to ="/login"> <h2> Login</h2> </Link>
            </div>
         </div> 
         </div> 

         <div className="image">
                  <img src ="https://static.vecteezy.com/system/resources/previews/002/181/971/original/checklist-to-do-list-list-or-notepad-concept-business-idea-planning-or-coffee-break-illustration-flat-style-vector.jpg"/>
         </div>


       </div>
       
      
   )
};

export default Home;