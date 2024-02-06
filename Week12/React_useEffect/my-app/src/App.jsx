import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, seTime] = useState(new Date().toTimeString());

  useEffect(() => {
    const timer = setTimeout(() => seTime(new Date().toTimeString()), 1000);
    return () => clearTimeout(timer);
  });

  const [posts, setPosts] = useState([]);
  const [width, setWidth] = useState("calc((100% - 15rem) / 4)");

  useEffect(() => {
    let igonre = false;
    (async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data.slice(0, 10));
    })();
    return () => (igonre = true);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setWidth("100%");
      } else {
        setWidth("calc((100% - 15rem) / 4)");
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section id="ex-1">
        <h2>Exercise 1</h2>
        <div>{time}</div>
      </section>
      <hr />
      <section id="ex-2-3">
        <h2>Exercise 2 + 3</h2>
        <ol>
          {posts.map((p) => {
            return (
              <li key={p.id} style={{ width: width }}>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}

export default App;
