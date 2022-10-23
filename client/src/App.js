import React from "react";
import Registration from './components/Register'
import Login from "./components/login";
import Dashboard from './components/dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (


<Router>
           <div className="App">
            
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/registration' element={<Registration />}></Route>
                 <Route exact path='/dashboard' element={< Dashboard />}></Route>
          </Routes>
          </div>
       </Router>
  )}

