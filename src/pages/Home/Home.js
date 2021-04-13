import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css'
import Headshot from '../../imgs/Headshot.jpeg'
import Lumiere from '../../imgs/Lumiere-Cropped.jpg'
import NewYork from '../../imgs/New York.jpg'

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Oh hi! Didn't see you there.</h1>
          <h1>Come on in, let me show you around!</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img id="image" src={Headshot} alt="Nick's headshot." />
        </Col>
        <Col>
          <h4>
            Hello! My name is Nick Palmer!
          </h4>
          <h5>
            Now, you may be wondering where you've heard that name before. Well, unless you've spent an inordinate amount of time watching amateur theater productions based in and around Orange County, you're definitely thinking of someone else!
          </h5>
          <h5>
            I'm an aspiring programmer currently participating in a Boot Camp through UCI, working hard to expand my knowledge of programming skills! I already have a few bits of programming under my belt, but this portfolio will start as a repository for the projects built in my class. Check back as I update this site with future builds!
          </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            I have a variety of interests!
        </h4>
          <h5>
            Besides spending countless hours coding, I also find time to pursue my side hustle, the ever popular, ever lucrative gig acting! I've been a part of hundreds of performances over the last fifteen years, and I continue adding to that list of accomplichments every year!
        </h5>
          <h5>
            Acting is and will always be the outlet for my creativity, and I wouldn't be where I am today without it. Be warned, if you work with me on a project I will absolutely invite you to every show I do for the next year!
        </h5>
        </Col>
        <Col>
          <img id="image" src ={Lumiere} alt ="Nick as Lumiere." />
        </Col>
      </Row>
      <Row>
        <Col>
          <img id="image" src={NewYork} alt="" />
        </Col>
        <Col>
          <h4>
            All in all, I like to get things done!
        </h4>
          <h5>
            I'm a fun loving guy. I've worked for Disneyland, I've flown to New York to see Broadway shows, and I play video games for fun in my spare time. Whatever I do with my time, I try to make sure it's enjoyable. So it should come as no surprise that I enjoy coding, and spending my time typing away at a computer is a particularly fun way for me to spend my days.
        </h5>
          <h5>
            With that being said, I take my work seriously. I've made several projects of my own, for no reason outside of seeing a need in my life and filling it without help. Solving everyday problems has always been a good time for me, regardless of the time spent doing it!
        </h5>
          <h5>
            So, if you have a problem needing solving, feel free to reach out to me! I'll even throw in a personal rendition of your favorite song!
        </h5>
          <h5>Signed,</h5>
          <h5>Nick Palmer</h5>
          <h5>
            P.S. Even if you don't need my services, I'm always up for a chat about musical theater and video games, so hit me up!
        </h5>
        </Col>
      </Row>
    </Container>
  )
}

export default Home