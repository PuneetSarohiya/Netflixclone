
const API_KEY = '196d265745385421905c48a1766667eb';

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchNowPlaying: `/now_playing/movie/day?api_key=${API_KEY}`,
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchDramas: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchMusic: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchTvMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchtanimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchlatest: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
  fetchtheater: `/discover/movie?primary_release_date.gte=2021-12-02&primary_release_date.Ite=2022-02-08&api_key=${API_KEY}`,
  fetchSciencefiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
};

export default requests;
