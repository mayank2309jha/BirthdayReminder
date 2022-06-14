import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Click Me</button>
        {/*We want the button to remove all the names from the list because we have congratulated them.*/}
      </section>
    </main>
  );
}

export default App;
