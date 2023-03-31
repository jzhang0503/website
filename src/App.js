// import './App.css';
import SelfIntro from './pages/Home';
import SocialLinks from './pages/Socials';
import Projects from './pages/Projects';
import Navbar from './components/navbar';
import About from './pages/About';


function App() {
  return (
    <>
      <Navbar/>
      <SelfIntro/>
      <About/>
      <Projects/>
      <SocialLinks/>
    </>
  );
}

export default App;
