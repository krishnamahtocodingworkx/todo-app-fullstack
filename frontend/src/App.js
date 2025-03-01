import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Animation from "./pages/Animation";
import ScrollAnimation from "./pages/ScrollAnimation";
import PageAnimation from "./Abc";
import Xyz from "./Xyz";
import GoogleLoginScreen from "./pages/GoogleLoginPage";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
function App() {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/practice"
          element={
            <PublicRoute>
              <Animation />
            </PublicRoute>
          }
        />
        <Route
          path="/google-login"
          element={
            <PublicRoute>
              <GoogleLoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Uncomment these if needed */}
        {/* <Route path="/abc" element={<PageAnimation />} /> */}
        {/* <Route path="/xyz" element={<Xyz />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
