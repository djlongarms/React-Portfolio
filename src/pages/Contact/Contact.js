import { Container, Row, Col } from 'reactstrap'
import Finale from '../../imgs/Be Our Guest Finale.jpg'
import ContactForm from './components/ContactForm'

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Want to get in touch with Nick? Whether you want to discuss his current projects, get some advice on your next video game purchase, or have a song request, fill out the form and Nick will get back to you as soon as he can!</h2>
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={Finale} alt="Finale of Nick in Be Our Guest" />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact