import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { Container } from 'react-bootstrap';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  
  // Declare variables to use for manipulating the input to the SMHI API
  const Stockholm = '97400';
  const Malmö = '53360';
  const Göteborg = '72420';
  

  function authenticate(el) {
    // Find user in the users array from the API if the username, email & id <= 3 match.
      const userExist = users.find(
      user => user.username.toLowerCase() === el.password.toLowerCase()
      && user.email.toLowerCase() === el.email.toLowerCase()
      && user.id <= 3);
      console.log(userExist)

      userExist !== undefined ? setUser(userExist) : setUser(null)
      setAuth(userExist !== undefined ? true : false)

}

  return (
    <Container>
      <Routes>
        {!auth && (
          <Route
            path="/Login"
            element={<Login authenticate={authenticate} />}
          />
        )}

        {auth && (
          <>
            <Route path="/dashboard" element={<Dashboard user={user}/>} />
          </>
        )}
        <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/Login"} />} />
      </Routes>
    </Container>
  );
};

export default App;
