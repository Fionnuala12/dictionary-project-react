import book from './book.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={book} className="Book-logo img-fluid" alt="book" /> <h1> Dictionary</h1>
      </header>
    </div>
  );
}

export default App;
