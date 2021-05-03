import React, { useState, useEffect } from "react";
import NotesMain from "./notesMainPage/NotesMain.jsx";
import Register from "./RegisterPage/Register";

function App() {

  return (
    <div>
      <NotesMain />
      {/* <Register/> */}
    </div>
  );
}

export default App;



 // useEffect(() => {
  //   fetch("http://localhost:9000/noteStorage/retreive")
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res.length) ;
  //     for(var x = 0; x < res.length; x++) {
  //         var newNote = {
  //         title: res[x].title ,
  //         content: res[x].content ,
  //         identification: res[x].id
  //       };
  //       console.log("x IS EQUAL TO: " + x);
  //       console.log(newNote);
  //       // addInitialNotes(newNote);
  //     }  
  //     console.log("FOR LOOP FINISHED.")
  //     // res.forEach(element=>{
  //     //   var newNote = {
  //     //     title: element.title ,
  //     //     content: element.content ,
  //     //     identification: element.id
  //     //   }
  //     //   AddInitialNotes(newNote);
  //     // });
  //   })
  //   .catch(err => err);
  // });

  // setInitialNotes();

  // let setInitialNotes = async (url) => {

  //   let response = await fetch(url);
  //   let results = await response.json();
  //   let theLength = await results.length;

  //        for(var x = 0; x < await theLength; x++) {
  //         var newNote = {
  //         title: results[x].title ,
  //         content: results[x].content ,
  //         identification: results[x].id
  //       };
  //       AddInitialNotes(newNote);
  //     }     
  //   }


  // setInitialNotes("http://localhost:9000/noteStorage/retreive");

  // function retrieveInitialNotes() {
  //   return fetch("http://localhost:9000/noteStorage/retreive")
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res.length) ;
  //     var newArray = [];
  //     for(var x = 0; x < res.length; x++) {
  //         var newNote = {
  //         title: res[x].title ,
  //         content: res[x].content ,
  //         identification: res[x].id
  //       };
  //       console.log("x IS EQUAL TO: " + x);
  //       console.log(newNote);
  //       newArray.push(newNote);
  //     }  
  //     console.log("FOR LOOP FINISHED.");
  //     //console.log(newArray);
  //     return newArray;
  //     // res.forEach(element=>{
  //     //   var newNote = {
  //     //     title: element.title ,
  //     //     content: element.content ,
  //     //     identification: element.id
  //     //   }
  //     //   AddInitialNotes(newNote);
  //     // });
  //   })
  //   .catch(err => err);
  // }


  //console.log(retrieveInitialNotes());
  //console.log("myArr is: " + myArr);


  // useEffect(() => {
  //   fetch("http://localhost:9000/testAPI")
  //       .then(res => res.text())
  //       .then(res => setApiResponse(res))
  //       .catch(err => err);
  // });

  // useEffect(() => {
  //   // POST request using fetch inside useEffect React hook
  //   const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  //   };
  //   fetch("http://localhost:9000/", requestOptions)
  //       .then(response => response.text())
  //       .then(data => console.log(data));

  // // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
  