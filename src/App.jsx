import { use, useEffect, useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import Input from "./components/Input";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [
      { id: 1, Text: "First Note" },
      { id: 2, Text: "Second Note" },
    ]
  );
  const [note, setNote] = useState("");
  useEffect(() => {
    const updatedNotes = notes;
    if (note !== "") {
      updatedNotes.push({
        id: notes.length + 1,
        Text: note,
      });
    }
    setNotes(updatedNotes);
    // localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNote("");
    console.log("note", note);
  }, [note]);
  return (
    <>
      <Input note={note} setNote={setNote}></Input>
      <Notes notes={notes} setNotes={setNotes}></Notes>
    </>
  );
}

export default App;
