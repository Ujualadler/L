import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Admin/Login";



function AdminRoute() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />

      </Routes>
    </>
  );
}

export default AdminRoute;
