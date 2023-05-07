import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiService } from '../../services/api-service';

import Loader from '../Loader';

import css from './Cast.module.css';
import Error from '../Error';

const Cast = () => {

  const [searchParams] = useSearchParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const movieId = searchParams.get('id');

  useEffect(() => {
    setIsLoading(true);
    apiService.getMovieCredits(movieId)
      .then(res => {
        setCast(res);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const listActors = cast.map(({ profile_path, character, name }) => (
    <li key={ name } className={ css.item }>
      <img src={ profile_path } alt={ name } />
      <p className={ css.name }>{ name } <span>({ character })</span></p>
    </li>
  ));

  return (
    <>
      { isLoading && <Loader /> }
      {
        error
          ? <Error>I'm sorry. I cant find actors for this movie</Error>
          : <ul className={ css.box }>{ listActors }</ul>
      }
    </>
  );
};

export default Cast;
