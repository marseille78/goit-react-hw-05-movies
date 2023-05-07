import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { apiService } from '../services/api-service';
import MovieItem from '../components/MovieItem';
import Loader from '../components/Loader';
import Button from '../components/Button';
import Error from '../components/Error';

const Movies = () => {

  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get('search');

  const [activePage, setActivePage] = useState(1);
  const [listResults, setListResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

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

  const handleLoadMore = () => setActivePage(state => state + 1);

  const listMovies = listResults.map(movie => {
    return <MovieItem key={ movie.movieId } data={ movie } state={{ from: location }} />
  });

  return (
    <>
      { isLoading && <Loader /> }
      <h1>Searched by "{ querySearch }"</h1>
      <div className='listMovies'>
        { error ? <Error>I'm sorry. I don't have movies "{ querySearch }"</Error> : listMovies }
      </div>
      {
        (!error && listResults.length > 0 && listResults.length < totalResults)
        && <Button onClick={ handleLoadMore }>Load more</Button>
      }
    </>
  );
};

export default Movies;
