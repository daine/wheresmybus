import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Map from './map/Map';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Where's my bus?</Navbar.Brand>
      </Navbar>
      <Map/>
    </div>
  );
}

export default App;
