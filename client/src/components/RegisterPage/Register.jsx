import React, { useState, useEffect } from "react";
import Header from "../notesMainPage/Header";
import RegisterForm from "./RegisterForm";


function Register() {
    return (
        <div>
            <Header />
            <RegisterForm />
        </div>
    )
}


export default Register;