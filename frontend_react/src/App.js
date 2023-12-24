import logo from './logo.svg';
import './App.scss';
import { About, Footer, Header, Skills, Testimonial, Work, Contact} from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial /> */}
      {/* <Footer /> */}
      <Contact />

    </div>
  );
}

export default App;
