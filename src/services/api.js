const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDE5OWI1MzIxMDc5ZTQzMWZjM2I0NWRlNWE2ZDA0NCIsIm5iZiI6MTc0ODUyMjExNi40MDMsInN1YiI6IjY4Mzg1NDg0Yzk5YjcyMDM5OWE4ODE4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lTupUvqnbToUBGKLwKrdVH2Us6HZxEUMfQ__wcQvy1U";

const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  "Content-Type": "application/json;charset=utf-8",
};

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, {
    method: "GET",
    headers,
  });

  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`, {
    method: "GET",
    headers,
  });

  const data = await response.json();
  return data.results;
};
