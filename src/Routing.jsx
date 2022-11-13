import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Another from './Another'
import Contact from './Contact'
import Home from './Home'
import Info from './Info'
import Other from './Other'

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/another' element={<Another />} />
                <Route path='/other' element={<Other />} />
                <Route path='/info' element={<Info />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
} 