import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from './Routes/AdminRoute';
import UserRoute from './Routes/UserRoute';




function App() {


  return (
    <>
    <ToastContainer />

    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/*" element={<UserRoute />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
