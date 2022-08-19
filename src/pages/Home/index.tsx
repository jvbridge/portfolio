import { Container } from 'react-bootstrap';
import background from './assets/main_background.png';
import resume from './assets/resume.pdf';

export default function Home() {
  return (
    <Container>
      <div>
        <h1>Jonathan Bridge</h1>
        <h2>Full Stack developer</h2>
        <a href={resume}>Download Resume</a>
      </div>
    </Container>
  );
}
