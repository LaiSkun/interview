import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';
import Cookies from 'js-cookie';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [auth, setAuth] = useState(!!Cookies.get('loggedInUser'));

    return (
      <Router>
      <div>
          <nav>
              {/* <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/login">Login</Link>
                  </li>
                  <li>
                      <Link to="/register">Register</Link>
                  </li>
              </ul> */}
          </nav>
          <Routes>
              <Route path="/login" element={<Login setAuth={setAuth} />} />
              <Route path="/register" element={<Register />} />
              <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home auth={auth} setAuth={setAuth} />
                            </ProtectedRoute>
                        }
                    />
          </Routes>
      </div>
  </Router>
    );
};

export default App;
