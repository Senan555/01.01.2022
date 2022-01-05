import'./App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Services from './components/Services';
import Experiences from './components/Experiences';
function App() {
  return (
    <div className='container-fluid'>
    
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experiences />
      </div>
    
  );
}

export default App;
