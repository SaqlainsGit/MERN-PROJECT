import { Button, Card, CardContent, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { deleteMovie } from "../services/api";
import { useContext } from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie })  {
    const { user } = useContext(AuthContext);

    const handleDelete = async () => {
        await deleteMovie(movie._id);
        window.location.reload();
    }
return (
    <Card sx={{mb : 2}}>
        <CardContent>
            <Typography variant="h6" align="center" fontWeight={700}>{movie.title}</Typography>
            <Typography>Rating : {movie.rating}</Typography>
            <Typography>Year : {movie.year}</Typography>
            <Typography>Duration : {movie.duration} min</Typography>
            <Typography>Description : {movie.description} </Typography>
            {user?.role === "ADMIN" && (
                <>
            <Button
              component={Link}
              to={`/edit/${movie._id}`}
              variant="outlined"
              sx={{ mt: 1, mr: 1 }}
            >
              Edit
            </Button>

            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 1 }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </>
            )}
        </CardContent>
    </Card>
)
}

export default MovieCard;