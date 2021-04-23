import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import TheDate from "./TheDate";

function App() {

  const [notes, setNotes] = useState([]);
  const [apiResponse, setApiResponse] = useState("");

  function AddNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNote)
    };
    fetch("http://localhost:9000/storeNote", requestOptions)
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
