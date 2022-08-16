import React from 'react'
import ApiTable from './components/ApiTable'
import Navbar from './components/Navbar'
import Searching from './components/Searching'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="./components/Searching" element={<Searching />} />
          <Route exact path="./components/ApiTable.js" element={<ApiTable />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
