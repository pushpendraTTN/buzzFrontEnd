// import React from 'react';
import React from 'react';
import axios from 'axios';
import '../Login/login.css';


const login = ()=>{

    const googleAuth = async ()=>{
        console.log("Auth fun called");
        axios.get(`http://localhost:8000/google`
        ,{
            headers: {"Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'}
        })
        .then(res => {
            console.log("in auth")
         console.log(res);
        })};

        // const googleAuth = async ()=>{
        //     console.log("Auth fun called");
        //     axios.get(`http://localhost:8000`,{
        //         headers: {"Access-Control-Allow-Origin": "*",
        //         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'}
        //     })
        //     .then(res => {
        //         console.log("in auth")
        //      console.log(res);
        //     })};

    
    return(        
        <div>
            <button className="button" onClick={()=>googleAuth()}>Login with Google</button>
        </div>
    );
};

export default login;