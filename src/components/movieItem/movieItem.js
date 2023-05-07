import { Link } from 'react-router-dom';

import css from "./movieItem.module.css";

const MovieItem = ({ data: { movieId, poster_path, title, vote_average } }) => {

  return (
    <Link to={ `/movies/${ movieId }` } className={ css.box }>
      <div className={ css.poster }>
        <img src={ poster_path } alt={ title } />
      </div>
      <div className={ css.info }>
        <span className={ css.rating }>{ vote_average }</span>
        <h3 className={ css.title }>{ title }</h3>
      </div>
    </Link>
  );
};

export default MovieItem;
