import css from "./header.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

const Header = () => {

  const [value, setValue] = useState('');
  const goToMovies = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    goToMovies(`/movies?search=${ value }`);
    setValue('')
  }

  return (
    <div className={ css.box }>
      <div className='container'>
        <div className={ css.inner }>
          <Link to='/' className={ css.logo }>Home</Link>
          <form id='search' onSubmit={ handleSubmit }>
            <div className={css.searchField}>
              <input
                type='text'
                name='search'
                placeholder='Search...'
                autoComplete='off'
                className={css.search}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type='submit' className={css.btnSubmit}>
                <BsSearch size='16px' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
