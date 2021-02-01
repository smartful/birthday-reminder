import './App.css';
import { friends } from './friends';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      {friends.map(friend => <Card 
        url={friend.url}
        name={friend.name}
        birthdate={friend.birthdate}
      />)}
    </div>
  );
}

export default App;
