import PropTypes from 'prop-types';
import actorBg from '../../utilities/images/actor.png';
import Container from 'components/Container';
import { List, Item, PhotoWrapper, Photo, Name } from './ActorsList.styled';

function ActorsList({ actors }) {
  // console.log({ actors });
  return (
    <Container isPadding>
      <List>
        {actors.map(({ id, name, photo }) => {
          return (
            <Item key={id}>
              <PhotoWrapper>
                <Photo
                  src={
                    photo ? `https://image.tmdb.org/t/p/w500/${photo}` : actorBg
                  }
                  alt={name}
                />
              </PhotoWrapper>
              <Name>{name}</Name>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

ActorsList.prototype = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }),
  ),
};

export default ActorsList;
