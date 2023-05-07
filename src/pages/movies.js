import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiService } from '../services/api-service';
import MovieItem from '../components/movieItem';
import Loader from '../components/loader';
import Button from '../components/button';

const Movies = () => {

  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get('search');

  const [activePage, setActivePage] = useState(1);
  const [listResults, setListResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    apiService.searchMovies(querySearch, activePage)
      .then(({ results, total_results }) => {
        setTotalResults(total_results);
        setListResults(state => {
          return [...state, ...results];
        });
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage, querySearch]);

  const listMovies = listResults.map(movie => {
    return <MovieItem key={ movie.movieId } data={ movie } />
  });

  const loader = isLoading && <Loader />;
  const content = error ? <h2>{ error.message }</h2> : listMovies;
  const btnLoadMore = (!error && listResults.length > 0 && listResults.length < totalResults)
    && <Button onClick={ () => setActivePage(state => state + 1) }>Load more</Button>

  return (
    <>
      { loader }
      <h1>Searched by "{ querySearch }"</h1>
      <div className='listMovies'>
        { content }
      </div>
      { btnLoadMore }
    </>
  );
};

export default Movies;
