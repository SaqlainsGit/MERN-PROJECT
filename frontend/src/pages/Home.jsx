import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getMovies, sortMovies } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const res = await getMovies();
    setMovies(res.data);
  };

  const handleSort = async (field) => {
    const res = await sortMovies(field);
    setMovies(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <Button onClick={() => handleSort("rating")}>Sort by Rating</Button>
      <Button onClick={() => handleSort("year")}>Sort by Year</Button>
      <Button onClick={() => handleSort("duration")}>Sort by Duration</Button>

      {movies.map(m => (
        <MovieCard key={m._id} movie={m} />
      ))}
    </div>
  );
}

export default Home;
