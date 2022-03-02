import React from 'react';
import Header from './components/header';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import {Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

export const GlobalCtx = React.createContext(null);

function App() { 

  const [gState, setGState] = React.useState({                              //Global state property
    url:"http://shopp-abnb.herokuapp.com/", 
    token: null}); 

  React.useEffect(()=>{                                                     // runs page once 
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    if(token){
      setGState({...gState, token: token.token})
    }
  }, [])
  
  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
    <div className="App">
     <Link to ="/"> <h1 className="siteTitle"> Shopping<span>List</span> </h1> </Link>
 {/* <Header /> */}
<div className="home-boxes">  
  <div className="mh"> 
      <main> 
        <Switch>
          <Route exact path ="/" render ={(rp) => gState.token ? <Dashboard /> : <Home />}/>
          <Route  path ="/signup" render ={(rp) => <Signup {...rp}/>}/> 
          <Route  path ="/login" render ={(rp) => <Login {...rp}/>}/>
          {/* <Route  path ="/dashboard" render ={(rp) => <h1> Dashboard </h1>}/> */}
        </Switch>
      </main>
      {/* <Header/> */}
      </div>

    <div > 
    </div>
</div> 


  </div>
     </GlobalCtx.Provider>
  );
}

export default App;
