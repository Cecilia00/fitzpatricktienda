import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<ItemListContainer />} />
          <Route path='/category/:categoryId' element = {<ItemListContainer />} />
          <Route path='/item/:productId' element = {<ItemDetailContainer />} />
          <Route path='/cart' element = {<ItemListContainer />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
