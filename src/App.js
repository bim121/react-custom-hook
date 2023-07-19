import './App.css';
import ArrayComponent from './componentExample/ArrayComponent';
import AsyncComponent from './componentExample/AsyncComponent';
import ClickOutsideComponent from './componentExample/ClickOutsideComponent';
import CookieComponent from './componentExample/CookieComponent';
import CopyToClipboardComponent from './componentExample/CopyToClipboardComponent';
import EventListenerComponent from './componentExample/EventListenerComponent';

function App() {
  return (
    <div className="App">
      <CopyToClipboardComponent/>
    </div>
  );
}

export default App;
