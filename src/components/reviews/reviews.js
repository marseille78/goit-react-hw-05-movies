import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiService } from '../../services/api-service';

import Loader from '../loader';

import css from './reviews.module.css';

const Reviews = () => {

  const [searchParams] = useSearchParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const movieId = searchParams.get('id');

  useEffect(() => {
    setIsLoading(true);
    apiService.getMovieReviews(movieId)
      .then(res => {
        setReviews(res);
      })
      .catch(err => {
        setReviews([]);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const listReviews = reviews.map(({
    author,
    avatar_path,
    content,
    created_at,
    updated_at,
    url,
    id
  }) => (
    <li key={ id } className={ css.item }>
      <div className={ css.avatar }>
        <img src={ avatar_path } alt={ author } />
      </div>
      <div className={ css.body }>
        <h3>{ author }</h3>
        <p className={ css.details }>Created at { created_at } { updated_at && <span>( Updated at { updated_at } )</span> }</p>
        <div className={ css.content }>{ content }</div>
        <a href={ url }>Link to original</a>
      </div>
    </li>
  ));

  const loader = isLoading && <Loader />
  const content = error
    ? <h2>{ error.message }</h2>
    : listReviews.length === 0
      ? <h2>No reviews</h2>
      : (
        <ul className={ css.box }>
          { listReviews }
        </ul>
      );

  return (
    <>
      { loader }
      { content }
    </>
  );
};

export default Reviews;
