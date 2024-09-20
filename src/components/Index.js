import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Header from "./Navbar/Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Index(props) {
  const { isLoggedIn, setLoggedIn } = props;
  return (
    <div>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        {isLoggedIn ? (
          <Routes>
            <Route
              path="/home"
              element={<Home setLoggedIn={setLoggedIn} />}
            ></Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />
              }
            ></Route>
            <Route
              path="/signup"
              element={<SignUp setIsLoggedIn={setLoggedIn} />}
            ></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}
