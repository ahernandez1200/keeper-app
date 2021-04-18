import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import TheDate from "./TheDate";

function App() {
  const [notes, setNotes] = useState([]);
  //+1
  const [apiResponse, setApiResponse] = useState("");

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // useEffect(() => {
  //   fetch("http://localhost:9000/testAPI")
  //       .then(res => res.text())
  //       .then(res => setApiResponse(res))
  //       .catch(err => err);
  // });

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch("http://localhost:9000/", requestOptions)
        .then(response => response.json())
        .then(data => setApiResponse("hello"));

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  




  return (
    <div>
    <h1>{apiResponse}</h1>
      <Header />
      <TheDate />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
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
