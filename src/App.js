import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className='App-header'>
      <Nav className='App-link'></Nav>
      <main >
        <About ></About>
      </main>
    </div>
  );
}

export default App;
