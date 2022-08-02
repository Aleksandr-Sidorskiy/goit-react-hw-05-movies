import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import posterBg from '../../utilities/images/poster.jpg';
import Container from 'components/Container';
import {
  ButtonGoBack,
  Label,
  MainWrapper,
  Poster,
  InfoWrapper,
  TitleWrapper,
  Title,
  ReleaseDate,
  GenresList,
  GenresItem,
  Description,
  VoteWrapper,
  VoteAverage,
  VoteCount,
  Value,
  AdditionalWrapper,
  AdditionalTitle,
  NavigationsList,
  NavigationsItem,
  CustomLink,
} from './MovieDetails.styled';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function MovieDetails({ movieInfo }) {
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location.state.from;

  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

  const onGoBack = () => navigate(location?.state?.from ?? '/');

  return (
    <Container>
      <ButtonGoBack type="button" onClick={onGoBack}>
        <FaChevronLeft />
        <Label>Go back</Label>
      </ButtonGoBack>

      <MainWrapper>
        <Poster
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterBg}
          alt={title}
        />
        <InfoWrapper>
          <TitleWrapper>
            <Title>{title}</Title>
            <ReleaseDate>{releaseDate}</ReleaseDate>
          </TitleWrapper>
          <GenresList>
            {genres &&
              genres.map(({ name, id }) => (
                <GenresItem key={id}>{name}</GenresItem>
              ))}
          </GenresList>
          <Description>{description}</Description>
          <VoteWrapper>
            <VoteAverage>
              Vote average: <Value>{voteAverage}</Value>
            </VoteAverage>
            <VoteCount>
              Vote count: <Value>{voteCount}</Value>
            </VoteCount>
          </VoteWrapper>
        </InfoWrapper>
      </MainWrapper>

      <AdditionalWrapper>
        <AdditionalTitle>Additional Information</AdditionalTitle>
        <NavigationsList>
          <NavigationsItem>
            <CustomLink to="cast" state={{ from: subLocation }}>
              <FaChevronRight /> Cast
            </CustomLink>
          </NavigationsItem>
          <NavigationsItem>
            <CustomLink to="reviews" state={{ from: subLocation }}>
              <FaChevronRight /> Reviews
            </CustomLink>
          </NavigationsItem>
        </NavigationsList>
      </AdditionalWrapper>
    </Container>
  );
}

MovieDetails.prototype = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
  }),
};

export default MovieDetails;
