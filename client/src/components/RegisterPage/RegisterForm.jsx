import React, { useState, useEffect } from "react";



function MyRegisterForm() {
    return (
        <div>
            <form className = "container">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Re-type Password"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default MyRegisterForm;


