/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import * as Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const isTodoEmpty = todos.length === 0;

  useEffect(() => {
    // Carregar lista da API
  }, []);

  return (
    <>
      <div>
        <Header onCreateNewTodo={() => {}} />

        <Input.Root>
          <Input.Label htmlFor='name' id='name-label' />

          <Input.FormField />

          <Input.Icon>
            <span />
          </Input.Icon>

          <Input.ErrorMessage message='Digite seu nome para continuar' />
        </Input.Root>

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

          {isTodoEmpty && <span>Não há todos adicionados no momento!</span>}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
