import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <div>
        <Header />

        <main>
          <h2>Advantages</h2>

          <section>
            <div>
              <h3>Blazing fast</h3>
              <p>This to-do list app is insanely fast.</p>
            </div>

            <div>
              <h3>No CSS</h3>
              <p>Clean add flat design no CSS.</p>
            </div>
          </section>

          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
