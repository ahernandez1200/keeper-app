import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";




function MyLoginForm() {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });

    const [regClicked, setRegClicked] = useState(false);
    

    function handleChange(event) {
        setLoginInfo(previous=>{
            return(
                {
                    ...previous,
                    [event.target.name]: event.target.value
                }
            );
        });
        console.log(loginInfo);     
    }

    function handleSubmit(event) {
    }

    function handleClick() {
        setRegClicked(true);
    }

    if(regClicked) {
        return <Redirect to="/register"/>;
    }
    else {
        return (
            <div>
                <h1 className = "register-header">Login</h1>
                <form onChange={handleChange} onSubmit={handleSubmit} className = "container">
                    <input name="email"
                        value={loginInfo.email} type="email" placeholder="Email"/>
                    <input name="password" 
                        value={loginInfo.password} type="password" placeholder="Password"/>
                    <button  type="submit">Submit</button>
                </form>
                <h3 onClick={handleClick} className = "to-register">Need to register? Click here.</h3>
            </div>
        );
    }


    // return (
    //     <div>
    //         <h1 className = "register-header">Login</h1>
    //         <form onChange={handleChange} onSubmit={handleSubmit} className = "container">
    //             <input name="email"
    //                 value={loginInfo.email} type="email" placeholder="Email"/>
    //             <input name="password" 
    //                 value={loginInfo.password} type="password" placeholder="Password"/>
    //             <button  type="submit">Submit</button>
    //         </form>
    //         <h3 onClick={handleClick} className = "to-register">Need to register? Click here.</h3>
    //     </div>
    // )
}

export default MyLoginForm;


