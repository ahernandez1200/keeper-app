import React from "react";


function Header(props) {


  return (
    <header>
      <h1>Keeper</h1>
      {props.inNotes && <h1 onClick={props.logoutFunc} className="logout">logout</h1>}
    </header>
  );
}

export default Header;
