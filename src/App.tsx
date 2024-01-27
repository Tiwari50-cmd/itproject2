import { Route, Routes } from 'react-router-dom';
import routesData from './setup/routes';
import Navbar from './components/navbar';
import { useState } from 'react';

function App() {
  const [loginData, setloginData] = useState({})
  console.log(loginData,"login data success")

  return (
    
    <>
      <Navbar
      setloginData={setloginData}
      loginData={loginData}
      />
      <Routes>
        {routesData.map((item) => (
          <Route key={item?.id} path={item?.path} element={item?.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
