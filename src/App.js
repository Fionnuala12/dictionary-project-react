import React from "react"; 
import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="dictionary-app-wrapper">
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1> Dictionary</h1>
      </header>
      <main> 
        <Dictionary defaultKeyword = "sunset"/>
      </main>
      <footer>
<a href="https://github.com/Fionnuala12/dictionary-project-react">Open-source code</a> by Fionnuala Wilson
      </footer>
      </div>
    </div>
    </div>
  );
}

export default App;
