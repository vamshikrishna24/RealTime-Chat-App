import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import "./style.scss";
import Home from "./pages/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
