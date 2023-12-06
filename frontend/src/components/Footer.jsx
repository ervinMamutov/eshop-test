import { Container, Row, Col } from 'react-bootstrap';

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>YEShop &copy; {currentYear} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
