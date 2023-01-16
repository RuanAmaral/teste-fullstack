import { useState, useEffect } from 'react';
import { Route, Routes as Router, useNavigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Content } from '../components/Layout/Content';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      setToken(localStorage.getItem('token'));
    }
  }, [token, navigate]);

  return (
    <Router>
      {isAuthenticated ? (
        <Route
          element={
            <Layout>
              <Content />
            </Layout>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
      ) : (
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      )}
    </Router>
  );
}

export default Routes;
