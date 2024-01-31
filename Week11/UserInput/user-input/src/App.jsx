import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [person, setPerson] = useState({ name: "", age: "" });
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  useEffect(() => {
    console.log(`${name} selects ${fruit}`);
  }, [name, fruit]);

  const handleChange = (event, property) => {
    setPerson({ ...person, [property]: event.target.value });
  };
  return (
    <>
      <section>
        <h3>EXERCISE 1</h3>
        <input
          id="ex1-name-input"
          onChange={(e) => handleChange(e, "name")}
          value={person.name}
        />
        <input
          id="age-input"
          onChange={(e) => handleChange(e, "age")}
          value={person.age}
        />
        <button
          onClick={() => {
            alert(
              `Come in ${person.name}, you're ${person.age} - that's good enough`
            );
            setPerson({ name: "", age: "" });
          }}
        >
          Go to Bar
        </button>
      </section>
      <hr />
      <section>
        <h3>EXERCISE 2</h3>
        <input
          id="ex2-name-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <select
          id="select-input"
          name="fruits"
          onChange={(e) => setFruit(e.target.value)}
          value={fruit}
        >
          <option value="apple">apple</option>
          <option value="orange">orange</option>
          <option value="banana">banana</option>
          <option value="grape">grape</option>
        </select>
      </section>
    </>
  );
}

export default App;
