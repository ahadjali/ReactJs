//import logo from './logo.svg';
//import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpg';
import myVideo from './myVideo.mp4';

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: '100vw' }}>
        <h1 class="title red">Anis</h1>
        <br />
        <img src={imageInSrc} alt='imageInSrc' />
        <br />
        <img src="imageInPublic.jpg" alt='imageInPublic' />
      </div>
      <video width="320" height="240" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
