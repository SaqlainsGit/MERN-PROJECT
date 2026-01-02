import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovie, updateMovie } from "../services/api";


function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMovie(id).then(res => setMovie(res.data));
  }, [id]);

  const handleUpdate = async () => {
    await updateMovie(id, movie);
    navigate("/");
  };

  return (
    <div style={{ width: 400, margin: "40px auto" }}>
      <TextField
        label="Title"
        fullWidth
        value={movie.title || ""}
        onChange={e => setMovie({ ...movie, title: e.target.value })}
      />
      <TextField
        label="Rating"
        fullWidth sx={{ mt: 2 }}
        value={movie.rating || ""}
        onChange={e => setMovie({ ...movie, rating: e.target.value })}
      />
      <TextField
        label="Duration"
        fullWidth sx={{ mt: 2 }}
        value={movie.duration || ""}
        onChange={e => setMovie({ ...movie, duration: e.target.value })}
      />
      <TextField
        label="Description"
        fullWidth sx={{ mt: 2 }}
        value={movie.description || ""}
        onChange={e => setMovie({ ...movie, description: e.target.value })}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleUpdate}
      >
        Update Movie
      </Button>
    </div>
  );
}

export default EditMovie;
