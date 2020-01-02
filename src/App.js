import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThmeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThmeContextProvider>
        <Navbar />
        <BookList />
      </ThmeContextProvider>
    </div>
  );
}

export default App;
