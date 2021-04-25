import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import TheDate from "./TheDate";

function App() {

  const [notes, setNotes] = useState([]);
  const [apiResponse, setApiResponse] = useState("");

  //useEffect(() => {
    // fetch("http://localhost:9000/noteStorage/retreive")
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(res[0]);
    //       res.forEach(element=>{
    //         var newNote = {
    //           title: element.title ,
    //           content: element.content ,
    //           identification: element.id
    //         }
    //         AddNote(newNote);
    //       });
    //     })
    //     .catch(err => err);
  //});

  useEffect(() => {
    fetch("http://localhost:9000/noteStorage/retreive")
    .then(res => res.json())
    .then(res => {
      console.log(res.length) ;
      for(var x = 0; x < res.length; x++) {
          var newNote = {
          title: res[x].title ,
          content: res[x].content ,
          identification: res[x].id
        };
        console.log("x IS EQUAL TO: " + x);
        console.log(newNote);
        // addInitialNotes(newNote);
      }  
      console.log("FOR LOOP FINISHED.")
      // res.forEach(element=>{
      //   var newNote = {
      //     title: element.title ,
      //     content: element.content ,
      //     identification: element.id
      //   }
      //   AddInitialNotes(newNote);
      // });
    })
    .catch(err => err);
  });

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

  function addInitialNotes(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

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
        return noteItem.identification !== id;
      });
    });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: id})
    };
    fetch("http://localhost:9000/deleteNote", requestOptions)
      .then(response => response.text())
      .then(data => setApiResponse(data));


  }






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
  




  return (
    <div>
    <h1>{apiResponse}</h1>
      <Header />
      <TheDate />
      <CreateArea onAdd={AddNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            // key={index}
            // id={index}
            key={noteItem.identification}
            id={noteItem.identification}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
