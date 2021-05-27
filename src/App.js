import FruitContainer from "./components/FruitContainer"
import './App.css';

function App() {
  const fruits = ['apple 🍎', 'pineapple 🍍', 'mangos 🥭', 'banana 🍌', 'avocado 🥑', 'kiwi 🥝'];

  return (
    <div className="App">
      <h1>Fruit Filter</h1>
      <FruitContainer fruits={fruits}/>  {/* fruits is the prop(property name), {fruits} is the data from the array */}
    </div>
  );
}

export default App;
