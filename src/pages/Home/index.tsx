import background from './assets/main_background.png';
import resume from './assets/resume.pdf';

const mask = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: ' auto',
  height: '100vh',
};

const backgroundImage = {
  backgroundImage: `url(${background})`,
  height: '100vh',
};

export default function Home() {
  return (
    <div style={backgroundImage}>
      <div style={mask} className="">
        <div
          className="container d-flex align-items-center justify-content-center text-center h-100"
          style={{
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0)',
          }}
        >
          <div className="text-white">
            <div id="lead">
              <div id="lead-content">
                <h1>Jonathan Bridge</h1>
                <h2>Full Stack developer</h2>
              </div>
              <a
                className="btn btn-outline-light btn-lg m-2"
                href={resume}
                role="button"
                rel="noreferrer"
                target="_blank"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
