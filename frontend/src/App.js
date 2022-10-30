import './App.css';
import React,{useState,useEffect} from "react"
import { Routes, Route,useNavigate } from "react-router-dom";
import { Login } from './pages';
import Signup from './pages/signup/Signup';
import Main from './pages/main/Main';


function App() 
{
  const navigate = useNavigate();
  // const theme = createTheme({
  //   palette: {
  //     secondary: {
  //       main: "#E33E7F",
  //     },
  //   },
  // });
  const [loggedin, setloggedin] = useState()
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setloggedin(true);
      navigate("/dashboard");

    } else {
      setloggedin(false);

    }
  }, []);
  console.log(loggedin)
  console.log(localStorage.getItem("token"))

  return (
    <div className="App">
        {loggedin ? (
          <>
          <Routes>
            <Route path="/dashboard" element={<Main />} />
            <Route path="*" element={<Main />} />
          </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path='/signup' element={<Signup/>}/>
              <Route path="*" element={<Login />} />
            </Routes>
          </>
        )}
    </div>
  );
}

export default App;