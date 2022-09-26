import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
  return (
    <Profile handleName={alert} bio={"software master"} fullName={"Salah"} profession={"software developer"}>
      <img src={logo} className="App-logo" alt="logo" />
    </Profile>
  );
}

export default App;
