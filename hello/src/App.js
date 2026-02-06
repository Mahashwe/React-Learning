import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Message from './components/message';
function App() {
  return (
    <div className="App">
      <Greet name="diana" />
      <Greet name="bruce" />
      <Welcome name="Clark" />
      <Message />
    </div>
  );
}

export default App;
