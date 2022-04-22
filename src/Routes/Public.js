import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Checkin from '../Pages/Checkin/Checkin'
import Details from '../Pages/Datails/Details'

const Public = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Navigate to='/'/>}/>
            <Route path='/alta' element={<Checkin/>}/>
            <Route path='/ingresar' element={<Login/>}/>
            <Route path='/producto/:id' element={<Details/>}/>
        </Routes>
    )
}

export default Public;