/*
  Cancel token code based on:
    https://dev.to/collegewap/cancelling-previous-requests-in-search-bar-using-axios-in-react-3nef
*/

import Axios from 'axios';

const BASE_URL = 'https://www.omdbapi.com/?apikey=e4c0709b&s=';

let cancelToken;

function search(query) {
  //Check if there are any previous pending requests
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }

  //Save the cancel token for the current request
  cancelToken = Axios.CancelToken.source();

  return Axios.get(BASE_URL + query, { cancelToken: cancelToken.token }).then(
    ({ data }) => {
      if (data.Response === 'True') return data.Search;
      else return [data.Error];
    }
  );
}

const movieService = { search };
export default movieService;
