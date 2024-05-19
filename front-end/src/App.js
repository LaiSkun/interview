import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';

const App = () => {
    const [auth, setAuth] = useState(false);

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login setAuth={setAuth} />} />
                    <Route path="/register" element={<Register />} />
                    <Route 
                        path="/" 
                        element={<Home auth={auth} setAuth={setAuth} />} 
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
