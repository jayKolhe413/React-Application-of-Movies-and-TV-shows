import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDlhOWRhMjViOTFkYTU5MDJjMmU0YzAzZDVmMDgxZiIsInN1YiI6IjY1ZTIyNThjMmQ1MzFhMDE2MmMwN2IwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cG_d4v_3uxVSIt3j77X5bxZcQjXqIeOt3pq45ZSlgEQ",
  },
});

export default instance;
