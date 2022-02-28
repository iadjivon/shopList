# Shopping List

## `Shopping List` 
This is a MERN stack architecture-based Web application that provides users the ability ...

 - to add an item to the shopping list

 - to view their whole shopping list

 - to delete an individual item from the shopping list

 - to delete their entire shopping list, with a single button click (without going and deleting each individual item one by one) 

 - Each user must be able to login with their Google account and their shopping list must persist between their logins

<hr/>

## `Set-Up` 

This application uses the MERN stack with:
  - `Front-end`: React.js
  - `Server`: Express.js + Node.js
  - `Database`: MongoDB

### BACKEND
>- MCV (Models, View, Controllers) configuration
>- Express.js
> > - `npm install express` 
>- MongoDB - database
>>  - https://www.mongodb.com/

### FRONTEND 
>- **React App** 
>>- `npx create-react-app front-end`
>>- `cd front-end`
>>- `npm start`
>  - **Components** 
>    - `header` - _this holds our navigation and is displayed on all pages_
>  - **Pages**
>     - `Dashboard` - _this page holds our list and can only be seen after login_ 
 >    - `Home` - _this is our welcome page and can be seen without a login information._
  >     - `Login` - _has prompt to login_
  >    - `Signup` - _has prompt to 

 ## Additional Applications Used 

> - **Postman**: this application was used to test our routes in the backend
> - **CSS**: this application was used to style the site 


<hr/>

 ##  `Resources`
 
 - Review on MERN stack: `https://www.mongodb.com/mern-stack`

 - Building using Node.js: `https://cloud.google.com/nodejs`

 - Authentication/Backend + Front end: 
    - `https://cloud.google.com/endpoints/docs/frameworks/java/javascript-client`

    - `http://www.passportjs.org/docs/`
    
    - `https://www.youtube.com/watch?v=F-sFp_AvHc8`
    
    - `https://git.generalassemb.ly/ira/SEIR-FLEX-ZEN/blob/master/unit_2/w10d1/instructor_notes/Intro_EXPRESS_REACT_VIEWS.md`
    
    - `https://www.youtube.com/playlist?list=PLY6oTPmKnKbZsBHeBGNL9suAPIJdLaVk9`
    
- React Context: `https://reactjs.org/docs/context.html#when-to-use-context`

<hr/>

 ## `Things learned/ Reviewed`
 - How to delete all items at once  
  - Reviewed cluster creation for MongoDB
  - The 's' in  `module.exports` _really_ matters! 
    - Check your exports when presented with this error : _Router.use() requires a middleware function but got a Object_, 

- 'await' only works in an async funtion. 
    - Check the function for 'async' if you get this error:  _SyntaxError: await is only valid in async function_
    - when using _async-await_, also use the _try-catch_ to catch errors

  - In Authorization, ensure there is a space after bearer. It can be written as either one of the following:
    - Authorization: "bearer " + token  NOT "bearer" + token 
    - Authorization: `bearer ` + token NOT `bearer` + token

<hr/>

 ## `Possible Next Steps` 
 - Use library like Passport to pull google API and use for authentication. 
    - https://www.geeksforgeeks.org/nodejs-authentication-using-passportjs-and-passport-local-mongoose/
    - http://www.passportjs.org/packages/passport-google-oauth20/
  - Add path login with directing users to use Google account   
  - Add ability to edit individual items on the list. 
  - Add conditionals that send alert when form is incomplete, or user already exists
- Create 404 error page for when a link is not functional 

<hr/>
<hr/>


