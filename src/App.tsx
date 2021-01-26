import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card 
        url='https://randomuser.me/api/portraits/women/10.jpg'
        name="Judy McGannon"
        birthdate="30/01/1991"
      />
    </div>
  );
}

export default App;
