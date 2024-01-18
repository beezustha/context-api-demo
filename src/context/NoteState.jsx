import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Bijaya",
    color: "Black",
    planet: "Earth",
    hero: "Ironman",
  };
  const [state, setState] = useState(s1);

  const handleChange = (e) => {
    e.preventDefault();
    console.log("first");
    setState({
      name: "Ameer",
      color: "Black",
      planet: "Mars",
      hero: "Batman",
    });
    console.log(state);
  };
  return (
    // <NoteContext.Provider value={{ state, handleChange }}>
    //   {props.children}
    // </NoteContext.Provider>
    <NoteContext.Provider value={{ state, handleChange }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
