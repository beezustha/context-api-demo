import { useContext, useEffect } from "react";
import NoteContext from "../context/NoteContext";
const About = () => {
  const newState = useContext(NoteContext);
  //* Destructuring the new state
  const { state, handleChange } = newState;

  console.log(newState);
  return (
    //*Now we call return the object without using keyword "newState"
    <>
      <pre>Name: {state.name}</pre>
      <pre>Color: {state.color}</pre>
      <pre>Planet: {state.planet}</pre>
      <pre>hero: {state.hero}</pre>
      <div>
        <button className="btn btn-primary" onClick={handleChange}>
          Change
        </button>
      </div>
    </>
  );
};

export default About;
