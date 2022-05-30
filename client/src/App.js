import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import CreateUser from './features/auth/CreateUser'


import { RequireAuth } from './features/auth/RequireAuth'

function App() {



  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path='create' element={<CreateUser />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path='/main' element={<Welcome/>} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
