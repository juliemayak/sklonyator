import './styles/globals.css';
import WordForm from './components/WordForm';
import Nav from './components/Nav';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="app">
      <main className="w-full h-[100vh]">
        <Nav />
        <WordForm />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
