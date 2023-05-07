import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout';

const Home = lazy(() => import('../../pages/home'));
const Movies = lazy(() => import('../../pages/movies'));
const MovieDetails = lazy(() => import('../../pages/movie-details'));
const Cast = lazy(() => import('../cast'));
const Reviews = lazy(() => import('../reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="movies" element={ <Movies /> } />
        <Route path="movies/:movieId" element={ <MovieDetails /> }>
          <Route path="cast" element={ <Cast /> } />
          <Route path="reviews" element={ <Reviews /> } />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
