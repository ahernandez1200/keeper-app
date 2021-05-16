import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    username:props.email,
    theNote: {
      title: "",
      content: "",
      identification: Math.random()
    }
  });

  const [zoomIn, setZoomIn] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        theNote: {
          ...prevNote.theNote,
          [name]: value
        }
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    console.log("in create area...email: "+ props.email);
    //resetting note and generating new identification
    setNote({
      username: props.email,
      theNote: {
        title: "",
        content: "",
        identification: Math.random()
      }
    });
    event.preventDefault();
  }

  function handleClick() {
    setZoomIn((previous) => !previous);
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={zoomIn ? { display: "" } : { display: "none" }}
          name="title"
          onChange={handleChange}
          value={note.theNote.title}
          placeholder="Title"
        />
        <textarea
          onClick={handleClick}
          name="content"
          onChange={handleChange}
          value={note.theNote.content}
          placeholder="Take a note..."
          rows={zoomIn ? "3" : "1"}
        />
        <Zoom in="false">
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;




// let myObj = {
//   email: "hello",
//   notes: {
//     email2: "hello",
//     number: 7
//   }
// };

// myObj = {
//   ...myObj,
//   notes : {
//     ...myObj.notes,
//     number: 8
//   }
// };

// console.log(myObj.notes.number)



// import React, { useState } from "react";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from '@material-ui/core/Fab';
// import Zoom from "@material-ui/core/Zoom";

// function CreateArea(props) {
//   const [note, setNote] = useState({
//     username:props.email,
//     title: "",
//     content: "",
//     identification: Math.random()
//   });

//   const [zoomIn, setZoomIn] = useState(false);

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNote((prevNote) => {
//       return {
//         ...prevNote,
//         [name]: value
//       };
//     });
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     console.log("in create area...email: "+ props.email);
//     //resetting note and generating new identification
//     setNote({
//       username: props.email,
//       title: "",
//       content: "",
//       identification: Math.random()
//     });
//     event.preventDefault();
//   }

//   function handleClick() {
//     setZoomIn((previous) => !previous);
//   }

//   return (
//     <div>
//       <form className="create-note">
//         <input
//           style={zoomIn ? { display: "" } : { display: "none" }}
//           name="title"
//           onChange={handleChange}
//           value={note.title}
//           placeholder="Title"
//         />
//         <textarea
//           onClick={handleClick}
//           name="content"
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           rows={zoomIn ? "3" : "1"}
//         />
//         <Zoom in="false">
//           <Fab onClick={submitNote}>
//             <AddIcon />
//           </Fab>
//         </Zoom>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;




// let myObj = {
//   email: "hello",
//   notes: {
//     email2: "hello",
//     number: 7
//   }
// };

// myObj = {
//   ...myObj,
//   notes : {
//     ...myObj.notes,
//     number: 8
//   }
// };

// console.log(myObj.notes.number)