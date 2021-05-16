import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";





function MyLoginForm(props) {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });

    const [regClicked, setRegClicked] = useState(false);
    const [alert, setAlert] = useState({
        message: "",
        on: false
    });
    const [successfulLogin, setSuccessfulLogin] = useState(false);
    

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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginInfo)
        };
        fetch("http://localhost:9000/login", requestOptions)
            .then(response => response.text())
            .then(data => {
                data.includes("Error") ? setAlert({message: data, on: true}) :
                    setSuccessfulLogin(true);
            });

        event.preventDefault();
    }

    function handleClick() {
        setRegClicked(true);
    }

    if(regClicked)
        return <Redirect to="/register"/>;
    

    if(successfulLogin) {
        return <Redirect to={{
            pathname: "/notes",
            state: {username: loginInfo.email}
        }}/>;
    }
    
    return (
        <div>
            <Alert onClose={()=>setAlert({message: "", on: false})} 
                variant="filled"
                style= {alert.on ? {display: ""} : {display: "none"} }  
                severity= "error"  >
                {alert.message}
            </Alert>
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


