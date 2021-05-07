import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';




function MyRegisterForm() {

    const [regInfo, setRegInfo] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const [successfulReg, setSuccessfulReg] = useState(false);
    const [alert, setAlert] = useState({
        message: "",
        on: false
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
            setAlert({message: "Passwords do not match", on: true});
            setRegInfo(previous => {
                return(
                    {
                        ...previous,
                        password: "",
                        passwordConfirm: ""
                    }
                )
            });
        }
        else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(regInfo)
            };
            fetch("http://localhost:9000/registerUser", requestOptions)
                .then(response => response.text())
                .then(data => {
                    data.includes("Success") ? setSuccessfulReg(true) : setSuccessfulReg(false)                  
                    return setAlert({message: data, on: true});
                } );
        }

        event.preventDefault();
    }


    // if(successfulReg)
    //     return <Redirect to="/"/>;

    return (
        <div>
            <Alert onClose={()=>setAlert({message: "", on: false})} 
                variant="filled"
                style= {alert.on ? {display: ""} : {display: "none"} }  
                severity= {successfulReg ? "success" : "error"}  >
                {alert.message}
            </Alert>
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


