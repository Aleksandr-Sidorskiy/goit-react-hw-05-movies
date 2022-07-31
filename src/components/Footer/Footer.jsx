import Container from 'components/Container';
import { FooterWrapper, Wrapper, Copyright, Studios } from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Copyright>Glory to Ukraine!!!</Copyright>
          <Studios>AS</Studios>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
