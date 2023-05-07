import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import Loader from '../Loader';
import Button from '../Button';
import Error from '../Error';

const ListMovies = ({ handler }) => {

  const [activePage, setActivePage] = useState(1);
  const [listResults, setListResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    handler(activePage)
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

    return () => {
      clearState();
    };
  }, [activePage]);

  const listMovies = listResults.map(movie => {
    return <MovieItem key={ movie.movieId } data={ movie } />
  });

  const clearState = () => {
    setActivePage(1);
    setListResults([]);
    setTotalResults(0);
    setIsLoading(false);
    setError(null);
  };

  const handleLoadMore = () => setActivePage(state => state + 1);

  return (
    <>
      { isLoading && <Loader /> }
      <div className='listMovies'>
        { error ? <Error>I'm sorry. Something happened wrong</Error> : listMovies }
      </div>
      {
        (!error && listResults.length > 0 && listResults.length < totalResults)
        && <Button onClick={ handleLoadMore }>Load more</Button>
      }
    </>
  );
};

ListMovies.propTypes = {
  handler: PropTypes.func,
};

export default ListMovies;
