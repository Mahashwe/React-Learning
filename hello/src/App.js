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
import Postform from './components/postform';
import ClassCounter from './components/classcounter';
import Hookcounter from './components/hookcounter';
import Hookcounter2 from './hookcounter2';
import Hookcounter3 from './components/hookcounter3';
import Hook from './components/hook';
import Hookmouse from './components/hookmouse';
import Timer from './components/timer';
import Data from './components/datafetch1';
import Counternew from './components/reducer';
import Trail from './components/trail';
import React from 'react';
import Focus from './components/focus';
import NewCount from './components/newcount';
import NewCounttwo from './components/newcounttwo';

export const user = React.createContext()
export const channel = React.createContext()

function App() {
  return (

    <div className="App">
      <NewCounttwo />
      <NewCount />
      {/* <Focus /> */}
      {/* <Data /> */}
      {/* <Counternew /> */}
      {/* <DataFetch /> */}
      {/* <Timer /> */}
      {/* <Hookmouse /> */}
      {/* <Hookcounter3 /> */}
      {/* <Hook /> */}
      {/* <ClassCounter /> */}
      {/* <Trail /> */}
      {/* <Postform /> */}
      {/* <PostList /> */}
      {/* <user.Provider value="maha">
        <channel.Provider value="react">
          <CompoA />
        </channel.Provider>
      </user.Provider> */}
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
