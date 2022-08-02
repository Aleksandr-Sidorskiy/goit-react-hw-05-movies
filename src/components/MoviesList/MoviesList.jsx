import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard';
import { Wrapper } from './MoviesList.styled';

function MoviesList({ movies }) {
  return (
    <Wrapper>
      {movies.map(({ id, title, poster, voteAverage, voteCount }) => {
        return (
          <MovieCard
            key={id}
            id={id}
            title={title}
            poster={poster}
            voteAverage={voteAverage}
            voteCount={voteCount}
          />
        );
        })
      
      }
    </Wrapper>
  );
}

MoviesList.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      voteAverage: PropTypes.number.isRequired,
      voteCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MoviesList;
