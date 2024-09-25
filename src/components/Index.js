import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Header from "./Navbar/Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';

export default function Index() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? (
        <Routes>
          <Route path="/home" element={<Home setLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
