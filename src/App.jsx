import React from 'react';
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Items from './Items';
import Details from './Details';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Items/>} />
          <Route path="/:id/details" exact element={<Details/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

