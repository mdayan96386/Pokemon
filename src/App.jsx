import React from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Card from "./Components/Card";
import { PokeProvider } from "./Context/PokeContext";

function App() {
  return (
    <PokeProvider>
      <Navbar />
      <div className=" p-5  2xl:p-5 2xl:flex items-center justify-center flex-col">
        <Form />
        <Card />
      </div>
    </PokeProvider>
  );
}

export default App;
