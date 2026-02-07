import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Counter from './components/counter';
import Event from './components/event';
import NameList from './components/namelist';
function App() {
  return (
    <div className="App">
      <NameList />
      {/* <Greet name="diana" />
      <Greet name="bruce" />
      <Welcome name="Clark" />
      <Message /> */}
      {/* <Counter /> */}
      {/* <Event /> */}
    </div>
  );
}

export default App;
