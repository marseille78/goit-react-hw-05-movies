import { useEffect, useState } from 'react';
import MovieItem from '../movieItem';
import Loader from '../loader';
import Button from '../button';

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
    setIsLoading(0);
    setIsLoading(false);
    setError(null);
  };

  const loader = isLoading && <Loader />;
  const content = error ? <h2>{ error.message }</h2> : listMovies;
  const btnLoadMore = (!error && listResults.length > 0 && listResults.length < totalResults)
    && <Button onClick={() => setActivePage(state => state + 1)}>Load more</Button>

  return (
    <>
      { loader }
      <div className='listMovies'>
        { content }
      </div>
      { btnLoadMore }
    </>
  );
};

export default ListMovies;
