import {BrowserRouter} from 'react-router-dom'
import Carrusel from './Components/Carrusel/Carrusel';
import Navbar from './Components/Navbar/Navbar';

import Public from './Routes/Public'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Carrusel/>
      <Public/>
    </BrowserRouter>
  )
}

export default App;
