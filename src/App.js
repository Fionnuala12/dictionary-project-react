import React from "react"; 
import Dictionary from './Dictionary';
import book from './book.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={book} className="Book-logo img-fluid" alt="book" /> <h1> Dictionary</h1>
      </header>
      <main> 
        <Dictionary defaultKeyword = "sunset"/>
      </main>
      <footer>
        Coded by Fionnuala Wilson
      </footer>
      </div>
    </div>
  );
}

export default App;
