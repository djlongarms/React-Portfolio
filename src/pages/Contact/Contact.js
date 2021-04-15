import { Container, Row, Col } from 'reactstrap'
import Finale from '../../imgs/Be Our Guest Finale.jpg'

const Contact = () => {
  const handleFormSubmit = () => {

  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Want to get in touch with Nick? Whether you want to discuss his current projects, get some advice on your next video game purchase, or have a song request, fill out the form and Nick will get back to you as soon as he can!</h2>
        </Col>
        <Col>
          <form action="mailto:ylnickpalmer@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">
            Name:
            <br />
            <input type="text" size="19" name="ContactName" />
            <br /><br />
            Message:
            <br />
            <textarea name="ContactCommentt" rows="6" cols="20">
            </textarea>
            <br /><br />
            <input type="submit" value="Submit" />
          </form>
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