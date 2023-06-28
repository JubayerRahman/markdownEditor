import './App.css';
import Markdown from './Components/MarkdownFields/Markdown';
import NavBar from './Components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Markdown/>
      </header>
    </div>
  );
}

export default App;
