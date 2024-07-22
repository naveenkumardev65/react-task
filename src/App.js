import Weather from './components/Weather';
import './App.css'
import NewsFeed from './components/NewsFeed';
import ScribblePad from './components/ScribblePad';
import Login from './components/Login';
import SignUp from './components/Signup';
import { useState } from 'react';

function App() {
  const [isShowLoginForm, setLoginForm] = useState(false);
  return (
    <div className="App">
      <Weather />
      <ScribblePad />
      <NewsFeed />

      {/* {isShowLoginForm ? <Login /> :
        <SignUp />} */}
    </div>
  );
}

export default App;
