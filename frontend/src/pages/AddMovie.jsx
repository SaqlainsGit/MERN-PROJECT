import { TextField, Button, duration } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../services/api";

function AddMovie() {
    const [movie,setMovie] = useState({});
    const navigate = useNavigate();

    const handleAdd = async () => {
        await addMovie(movie);
        navigate("/")
    }
  return (
    <div style={{ width: 400, margin: "40px auto" }}>
      <TextField label="Title" fullWidth onChange={e=> setMovie({...movie, title : e.target.value})}/>
      <TextField label="Rating" fullWidth sx={{ mt: 2 }} onChange={e=> setMovie({...movie, rating : e.target.value})}/>
      <TextField label="Release Date" fullWidth sx={{ mt: 2 }} onChange={e=> setMovie({...movie, year : e.target.value})}/>
      <TextField label="Duration" fullWidth sx={{ mt: 2 }} onChange={e=> setMovie({...movie, duration : e.target.value})}/>
      <TextField label="Description" fullWidth sx={{ mt: 2 }} onChange={e=> setMovie({...movie, description : e.target.value})}/>
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleAdd}>
        Add Movie
      </Button>
    </div>
  );
}

export default AddMovie;
