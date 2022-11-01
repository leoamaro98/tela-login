import './App.css';
import FormLogin from './Components/FormLogin/FormLogin';
import Menu from './Components/Menu/Index';
import Video from './Components/Video/Index';

function App() {

  return (
    <div className="App">
      <Menu />
      <FormLogin/>
      <Video src="./imagens/video-institucional.mp4" />
    </div >

  );
}

export default App;
