import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';

import Public from './Routes/Public'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Public/>
    </BrowserRouter>
  )
}

export default App;
