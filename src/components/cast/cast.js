import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiService } from '../../services/api-service';

import Loader from '../loader';

import css from './cast.module.css';

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

  const loader = isLoading && <Loader />
  const content = error
    ? <h2>{ error.message }</h2>
    : (
      <ul className={ css.box }>
        { listActors }
      </ul>
    );

  return (
    <>
      { loader }
      { content }
    </>
  );
};

export default Cast;
