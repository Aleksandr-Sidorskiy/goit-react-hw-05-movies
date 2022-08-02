import PropTypes from 'prop-types';
import Container from 'components/Container';
import { List, Item, Title, Text } from './ReviewsList.styled';

function ReviewsList({ reviews }) {
  return (
    <Container isPadding>
      <List>
        {reviews.map(({ id, author, text }) => {
          return (
            <Item key={id}>
              <Title>{author}</Title>
              <Text>{text}</Text>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

ReviewsList.prototype = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default ReviewsList;
