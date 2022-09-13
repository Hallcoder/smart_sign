import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Options from './pages/options';
import NotFound from './pages/NotFound';
import Permisssion from './pages/permission';
import Discipline from './pages/disciplinePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/login'  element={<Login />}></Route>
        <Route path='/options' element={<Options />}></Route>
        <Route path='/' element={<App />} />
        <Route path='/permission' element={<Permisssion />}>
              <Route path='/permission/:id' element={<Permisssion />}></Route>
        </Route>
        <Route path='/discipline' element={<Discipline />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
