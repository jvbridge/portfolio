import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

export default function Footer() {
  return (
    <div className="container my-3 pb-3">
      <div className="container">
        <h3>Contact me!</h3>
      </div>
      <div className="container row my-3 mx-auto">
        <div className="d-flex justify-content-center">
          <a style={linkStyle} href="https://github.com/jvbridge">
            <FontAwesomeIcon className="mx-3 fa-5x" icon={faGithub} />
          </a>

          <a
            style={linkStyle}
            href="https://www.linkedin.com/in/jonathan-bridge/"
          >
            <FontAwesomeIcon className="mx-3 fa-5x" icon={faLinkedin} />
          </a>
          <a style={linkStyle} href="https://medium.com/@jvbridge">
            <FontAwesomeIcon className="mx-3 fa-5x" icon={faMedium} />
          </a>
        </div>
      </div>
    </div>
  );
}
