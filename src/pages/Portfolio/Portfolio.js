import Project from '../../components/Project'
import { Container, Row } from 'reactstrap'
import BoardomFighter from '../../imgs/Boardom Fighter Logo.png'
import Turnip from '../../imgs/turnip.png'
import FitnessTracker from '../../imgs/fitness-tracker.png'
import CodeQuiz from '../../imgs/code-quiz-screenshot.png'
import NoteTaker from '../../imgs/Note-Taker-Screenshot.png'
import PasswordGenerator from '../../imgs/password-generator.png'

const Portfolio = () => {
  const projects = [
    {
      image: BoardomFighter,
      title: 'Boardom Fighters',
      desc: 'The product of group collaboration, this is an application for searching for and storing favorite board games and prospective future board game purchases! Created through group collaboration as part of my coding boot camp!',
      alt: 'Logo for Boardom Fighters',
      link: 'https://djlongarms.github.io/Board-Game-Collection/'
    }, {
      image: Turnip,
      title: 'Stonk Stalks',
      desc: 'Stonk Stalks is a website designed for use with the Nintendo Switch game Animal Crossing: New Horizons. Facilitates interaction between users looking to use the "stalk" market by buying and selling turnips for the best prices possible. Created through group collaboration as part of my coding boot camp!',
      alt: 'Logo for Stonk Stalks',
      link: 'https://limitless-fortress-65893.herokuapp.com/'
    }, {
      image: FitnessTracker,
      title: 'Fitness Tracker',
      desc: 'An application that allows users to track their workouts each day, recording useful statistics for the user! I created the backend of this application as part of a class assignment!',
      alt: 'Logo for Scratch',
      link: 'https://warm-earth-88468.herokuapp.com/?id=606dff6e8142c40015a65f32'
    }, {
      image: CodeQuiz,
      title: 'Coding Challenge',
      desc: 'A basic coding quiz I made as part of a class assignment! Tests for very basic coding knowledge!',
      alt: 'Description of coding challenge',
      link: 'https://djlongarms.github.io/Code-Quiz/'
    }, {
      image: NoteTaker,
      title: 'Note Taker',
      desc: 'A note taking app that allows a user to create and delete notes, then look back on them later. I created the back end of this app as part of a class assignment!',
      alt: 'A generic titled note',
      link: 'https://infinite-fortress-28808.herokuapp.com/'
    }, {
      image: PasswordGenerator,
      title: 'Password Generator',
      desc: 'A password generator that makes a random password based on user desire. I made the javascript component of this app as part of a class assignment!',
      alt: 'A password generator',
      link: 'https://djlongarms.github.io/Password-Generator/'
    }
  ]

  return (
    <Container>
      <Row>
        <Project image={projects[0].image} alt={projects[0].alt} title={projects[0].title} desc={projects[0].desc} link={projects[0].link} />
        <Project image={projects[1].image} alt={projects[1].alt} title={projects[1].title} desc={projects[1].desc} link={projects[1].link} />
        <Project image={projects[2].image} alt={projects[2].alt} title={projects[2].title} desc={projects[2].desc} link={projects[2].link} />
      </Row>
      <Row>
        <Project image={projects[3].image} title={projects[3].title} desc={projects[3].desc} alt={projects[3].alt} link={projects[3].link} />
        <Project image={projects[4].image} title={projects[4].title} desc={projects[4].desc} alt={projects[4].alt} link={projects[4].link} />
        <Project image={projects[5].image} title={projects[5].title} desc={projects[5].desc} alt={projects[5].alt} link={projects[5].link} />
      </Row>
    </Container>
  )
}

export default Portfolio