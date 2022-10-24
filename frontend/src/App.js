import './App.css';
import React,{useState} from "react"
import { Routes, Route } from "react-router-dom";
import { Login } from './pages';


function App() {
  // const theme = createTheme({
  //   palette: {
  //     secondary: {
  //       main: "#E33E7F",
  //     },
  //   },
  // });
  const [loggedin, setloggedin] = useState(false)
  return (
    <div className="App">
        {loggedin ? (
          <></>
        ) : (
          <>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Login />} />
            </Routes>
          </>
        )}
    </div>
  );
}

export default App;
