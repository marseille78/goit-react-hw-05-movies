import css from "./Header.module.css";
import { NavLink, useNavigate } from 'react-router-dom';
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

  const handleChangeValue = (e) => setValue(e.target.value);

  return (
    <div className={ css.box }>
      <div className='container'>
        <div className={ css.inner }>
          <NavLink to='/' className={ css.logo }>Home</NavLink>
          <form id='search' onSubmit={ handleSubmit }>
            <div className={css.searchField}>
              <input
                type='text'
                name='search'
                placeholder='Search...'
                autoComplete='off'
                className={ css.search }
                value={ value }
                onChange={ handleChangeValue }
              />
              <button type='submit' className={ css.btnSubmit }>
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
