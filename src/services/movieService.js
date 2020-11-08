import Axios from 'axios';

const BASE_URL = 'https://www.omdbapi.com/?apikey=e4c0709b&s=';

function search(query) {
  return Axios.get(BASE_URL + query).then(({ data }) => {
    if (data.Response === 'True') return data.Search;
    else return [data.Error];
  });
}

const movieService = { search };
export default movieService;
