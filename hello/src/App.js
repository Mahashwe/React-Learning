import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Counter from './components/counter';
import Event from './components/event';
import NameList from './components/namelist';
import Style_learn from './components/style_learn';
import Forms from './components/forms';
import Lifecycle_a from './components/lifecycle_a';
import Refs from './components/Refs';
import Portal from './components/portal';
import Error from './components/error';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import CompoA from './components/CompoA';
import { UserProvider } from './components/context';
import PostList from './components/postlist';

function App() {
  return (

    <div className="App">
      <PostList />
      {/* <UserProvider value="maha">
        <CompoA />
      </UserProvider> */}
      {/* <ClickCounter /> */}
      {/* <ErrorBoundary>
        <Error heroname="batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Error heroname="joker" />
      </ErrorBoundary>
      {/* <Portal /> */}
      {/* <Refs /> */}
      {/* <Lifecycle_a /> */}
      {/* <Forms /> */}
      {/* <Style_learn /> */}
      {/* <NameList /> */}
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
