import { TextField } from "@mui/material";
import { useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

function Search() {
    const [q,setQ] = useState("");
    const[movies,setMovies] = useState([]);

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQ(value);

        if(value.trim===""){
            setMovies([]);
            return
        }

       const res =  await searchMovies(e.target.value);
       setMovies(res.data)
    }
return (
   <div style={{ width:400, margin:"30px auto"}}>
      <TextField
        label="Search"
        fullWidth
        value={q}
        onChange={handleSearch}
      />
      {movies.map(m => <MovieCard key={m._id} movie={m} />)}
    </div>
)
}

export default Search;