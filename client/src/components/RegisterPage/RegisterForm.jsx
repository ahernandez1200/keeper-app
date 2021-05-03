import React, { useState, useEffect } from "react";



function MyRegisterForm() {

    const [regInfo, setRegInfo] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
    });
    


    function handleChange(event) {
        setRegInfo(previous=>{
            return(
                {
                    ...previous,
                    [event.target.name]: event.target.value
                }
            );
        });
        console.log(regInfo);     
    }

    function handleSubmit(event) {

        if(regInfo.password != regInfo.passwordConfirm) {
            alert("Passwords do not match.");
            setRegInfo( {email: "", password: "", passwordConfirm: ""});  
        }
        else {
            //post request to register user.
        }

        event.preventDefault();
    }


    return (
        <div>
            <h1 className = "register-header">Register</h1>
            <form onChange={handleChange} onSubmit={handleSubmit} className = "container">
                <input name="email"
                    value={regInfo.email} type="email" placeholder="Email"/>
                <input name="password" 
                    value={regInfo.password} type="password" placeholder="Password"/>
                <input name="passwordConfirm" 
                    value={regInfo.passwordConfirm} type="password" placeholder="Confirm Password"/>
                <button  type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MyRegisterForm;


