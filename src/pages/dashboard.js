import React from "react";
import {GlobalCtx} from "../App";
import Header from "../components/header"


const Dashboard = (props) => {
        const {gState, setGState} = React.useContext(GlobalCtx); //global state destructured
        const {url, token} = gState;                                  //url to make API call 
        const [shopList, setShopList] = React.useState(null)     // this is an empty array to hold our list of items
        
// This funtion will get the shopping list and set it to JSON
        const getShopList = async () => {
            const response = await fetch(url + "/shoplist/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
            const json = await response.json()
            setShopList(json)
        }

        // This runs the getShopList function once and get all the available notes
        React.useEffect(() => {
           getShopList() 
        }, [])

        const input = React.useRef(null)
        // const update = React.useRef(null)


        // this pulls from the reference
        const handleClick = (e) => {
            console.log(input)
            const shopList = input.current.value
            fetch(url + "/shoplist/", {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `bearer ` + token
                },
                body: JSON.stringify({shopList})
            })
            .then(response => response.json())
            .then(data =>{ 
                input.current.value = "";       // this resets the form
                getShopList()                  // this returns the list of items

                        
            })
        }
        

        const handleDelete = (id) => {
            fetch(url + "/shoplist/" + id, {
                method: "delete",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `bearer ` + token
                },            
            })
            .then(response => response.json())
            .then(data =>{ 
                getShopList()                  // this returns the update list of items                     
            })
        }


        const handleDeleteAll = () => {
            shopList.map((shopList) => {                        //map over the shoplist array
                fetch(url + "/shoplist/" + shopList._id, {      // fetch the url belonging to the individual array
                method: "delete",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `bearer ` + token
                },            
            })
            .then(response => response.json())
             .then(data =>{ 
                getShopList()                                  // this returns the update list of items   
                console.log(data)                                   
            })
                    
                                       
          
            });
  
        }

      


    return (
        <div> 
             <Header />
             <h1 className="list-header"> My shopping List </h1>
             <div className="list-top"> 
             {/* <h3 className="new-item"> Add a new item to the list </h3> */}
                <input type = "text" name ="listitem" ref = {input} className="list-item-form" placeholder="Add a new item to the list" />
                <button onClick={handleClick} className="list-item-button"> Add to list </button>
            </div>
        <br/>
    <div className="list-bottom"> 
            
             {/* <button onClick = {() => handleDeleteAll(shopList._id)}> Delete All</button> */}
           <button onClick = {handleDeleteAll} className="delete-all-button"> Delete All </button>
           {/* { shopList.length >=1 ? (<button onClick = {handleDeleteAll} className="delete-all-button"> Delete All </button>) : null} */}

             <ul> 
                 {shopList ? shopList.map(shopList => <li key = {shopList._id}> <h3>{shopList.shopList}</h3>
                <button onClick = {() => handleDelete(shopList._id)} className="delete-button"> Delete </button>
                    

                 </li>) : null}
                
             </ul>
             <div className="list-bottom-img">
             <img src="https://media-s3-us-east-1.ceros.com/editorial-content/images/2020/03/23/67450fc4eed99ffae61ff027fb1c8d8b/working-at-home-coworking-space-concept-illustration-young-people-man-and-woman-freelancers-working-at-home-vector-flat-style-illustration-image.jpg?imageOpt=1&fit=bounds&width=444&crop=1295,1138,x2803,y0" alt="girl sitting on sofa typing on computer"/>
            </div>
    </div>


   </div>
   )
};

export default Dashboard;