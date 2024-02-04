import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Designs from './components/Designs';
import Wallpapers from './components/Wallpapers';
import Contact from './components/Contact';

function App() {
  return (
    <div className='app'>
      <Header />
      <Landing />
      <Designs />
      <Wallpapers />
      <Contact />
    </div>
  );
}

export default App;
