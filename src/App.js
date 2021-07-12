
import './App.css';
import Address from './Components/Profile/Address';
import Name from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <Name/>
      <Address/>
    </div>
  );
}

export default App;
