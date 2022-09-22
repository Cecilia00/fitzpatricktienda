import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainet'

function App() {
  return (
    <div >
      <Navbar />
      <ItemListContainer saludo= {'Hola'} />
    </div>
  );
}

export default App;
