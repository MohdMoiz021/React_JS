import React from "react";
import axios from 'axios'
import UserItem from "./UserItem";

// library : Framework it uses axios for fetching the data axios is a package it helps u to make an api call
class Users extends React.Component{
    state={
        users:[],
        hasError:false
    }

    constructor(){ 
    super()
    axios.get('https://api.github.com/users')
    .then(res=>this.setState({users:res.data}))
    .catch(err=>{
        this.setState({hasError:true})
    });
}
    
 render(){
    
    return<div>
    {
        this.state.hasError ? <div className="bg-red-600 m-3 text-white rounded p-2">
        Something went wrong, please try again
        </div> : null
    }
    
    <h1 className="font-bold ml-5">Users</h1>;
    { !this.setState.hasError? 
        this.state.users.map(user=> <UserItem user={user}/>
      
    )  : null}
    </div>
 }
}

export default Users;
















 // Whenever we are using inheritance plus constructor we have to use super thats mandatory
        // Status code 
        // 1xx - Information 
        // 2xx - success
        // 3xx - Redirects
        // 4xx - client error (401 Unauthorized 404 page not found)
        // 5xx - server errors
        // URL : https://api.g..
        // Method : Get
        // Status 
        // Req: USers headers
        // Res: server Headers