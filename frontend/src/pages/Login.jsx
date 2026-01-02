import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

function Login() {

    const [form, setForm] = useState({});
    const { setUser }= useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
        const res = await login(form);
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);
        navigate("/");
        }catch(err){
            alert(err.response?.data || "Invalid Credentials")
        }

    }
  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <TextField label="Email" fullWidth onChange={(e)=>setForm({...form, email:e.target.value})} />
      <TextField label="Password" type="password" fullWidth sx={{ mt: 2 }} onChange={(e)=> setForm({...form,password:e.target.value})} />
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default Login;
