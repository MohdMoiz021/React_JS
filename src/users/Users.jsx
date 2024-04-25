import React from "react";
import axios from 'axios'

// library : Framework it uses axios for fetching the data axios is a package it helps u to make an api call
class Users extends React.Component{
    state={
        users:[]
    }
    constructor(){ 
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
        super()
    axios.get('https://api.github.com/users')
    .then(res=>{
    this.setState({users:res.data});
    console.log(this.state);
})
    .catch(err=>console.log(err));
}
 render(){
    
    return <h1 className="font-bold">Users</h1>;
 }
}

export default Users;