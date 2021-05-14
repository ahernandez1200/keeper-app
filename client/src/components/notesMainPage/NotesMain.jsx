import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import TheDate from "./TheDate";

function NotesMain(props) {

  const [notes, setNotes] = useState([]);
  const [apiResponse, setApiResponse] = useState("");
  //the email of the logged-in user
  const emailOfUser = props.location.state.username;
  //to hold the number of entries that are in the database upon startup
  var initialDbSize;

 

  // const request = async () => {
  //   const response = await fetch("http://localhost:9000/noteStorage/retreive");
  //   var json = await response.json();
  //   //console.log(await jsonR);
  //   initialDbSize = json.length;
  //   setInitialNotes(json);
  // }

  // request();

  // /*the objects will be extract from the passed in array and
  //   will then be added to notes array with AddInitialNotes*/
  // function setInitialNotes(items) {
  //   items.forEach(element=>{
  //     var newNote = {
  //       title: element.title ,
  //       content: element.content ,
  //       identification: element.id
  //       };
  //       AddInitialNotes(newNote, initialDbSize);
  //   });
  // }


  // function AddInitialNotes(newNote, dbSize) {
  //   setNotes((prevNotes) => {
  //     /*if we just did return [...prevNotes, newNote], then the
  //       page would countinously re-render and keep adding the newNote.
  //       Adding this if-else block puts a break on this.
  //     */
  //     if(dbSize > prevNotes.length)
  //       return [...prevNotes, newNote];
  //     else
  //       return prevNotes;
  //   });
  // }

  function AddNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNote)
    };
    fetch("http://localhost:9000/noteStorage", requestOptions)
        .then(response => response.text())
        .then(data => setApiResponse(data));
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem.theNote.identification !== id;
      });
    });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: emailOfUser, id: id})
    };
    fetch("http://localhost:9000/deleteNote", requestOptions)
      .then(response => response.text())
      .then(data => setApiResponse(data))
      .then(initialDbSize--);


  }







  return (
    <div>
    <h1>{apiResponse}</h1>
      <Header />
      <TheDate />
      <CreateArea email={emailOfUser} onAdd={AddNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            // key={index}
            // id={index}
            key={noteItem.theNote.identification}
            id={noteItem.theNote.identification}
            title={noteItem.theNote.title}
            content={noteItem.theNote.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default NotesMain;



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
  