import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./pages";
import Signup from "./pages/signup/Signup";
import Main from "./pages/main/Main";

function App() {
  const navigate = useNavigate();
  // const theme = createTheme({
  //   palette: {
  //     secondary: {
  //       main: "#E33E7F",
  //     },
  //   },
  // });
  const [loggedin, setloggedin] = useState(true);
  useEffect(() => {
    // if (localStorage.getItem("token") !== null) {
    //   setloggedin(true);
    // } else {
    //   setloggedin(false);
    // }
  }, []);

  return (
    <div className="App">
      {loggedin ? (
        <>
          <Routes>
            <Route exact path="/dashboard" element={<Main />} />
            {/* <Route exact path="/logout" element={<Login />} /> */}
            <Route path="*" element={<Main />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dashboard" element={<Main />} />

            <Route exact path="/signup" element={<Signup />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
