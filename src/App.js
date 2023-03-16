import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { Container } from 'react-bootstrap';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setAllUsers(data))
  }, [])

  
  
  function authenticate(el) {
    
    // Find user in the users array from the API if the username, email & id <= 3 match.
    const userExist = allUsers.find(
      user => user.username.toLowerCase() === el.password.toLowerCase()
      && user.email.toLowerCase() === el.email.toLowerCase()
      && user.id <= 3);
      
      // Add city to user object
      userExist !== undefined && AddUserCity(userExist);
      
      userExist !== undefined ? setUser(userExist) : setUser(null)
      
      setAuth(userExist !== undefined ? true : false)
      
    }
    
    // Declare variables to use for manipulating the input to the SMHI API
    const Stockholm = '97400';
    const Malmö = '53360';
    const Göteborg = '72420';
    
  function AddUserCity(userExist) {
    if (userExist.id === 1) {
      userExist.city = Stockholm;
    }
    if (userExist.id === 2) {
      userExist.city = Göteborg;
    }
    if (userExist.id === 3) {
      userExist.city = Malmö;
    }
  }

  return (
    <Container>
      <Routes>
        {auth && (
          <Route
            path="/Login"
            element={<Login authenticate={authenticate} />}
          />
        )}
        {!auth && (
          <>
            <Route path="/dashboard" element={<Dashboard user={user} />} />
          </>
        )}
        <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/Login"} />} />
      </Routes>
    </Container>
  );
};

export default App;
