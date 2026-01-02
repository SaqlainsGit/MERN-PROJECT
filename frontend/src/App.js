import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import AddMovie from "./pages/AddMovie"
import EditMovie from "./pages/EditMovie"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/search" element={<Search/>}/>
     
      <Route path="/add" element={
            <ProtectedRoute>
              <AddMovie />
            </ProtectedRoute>
          }
        />
      <Route path="/edit/:id" element={
          <ProtectedRoute>
            <EditMovie/>
          </ProtectedRoute>
        }
        />  
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
