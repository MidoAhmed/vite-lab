// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  unauthenticatedLayoutConfig,
  authenticatedLayoutConfig,
} from "./config/layoutConfig";
import LayoutChooser from "./layouts/LayoutChooser";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Your authentication logic
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Your logout logic
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <UnauthenticatedLayout layoutName="default">
              <LoginPage />
            </UnauthenticatedLayout>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <AuthenticatedLayout layoutName={'default'}>
              <DashboardPage />
            </AuthenticatedLayout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;

const LoginPage = () => {
  return (
    <>
      <h1> I'm LoginPage </h1>
    </>
  );
};

const DashboardPage = () => {
  return (
    <>
      <h1> I'm DashboardPage </h1>
    </>
  );
};
