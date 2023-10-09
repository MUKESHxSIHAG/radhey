import './App.css';
import './Root.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RadheyNav from './Components/RadheyNav';
import HeroSection from './Components/HeroSection';
import Manufacturing from './Components/Manufacturing';
import WhyChooseus from './Components/WhyChooseus';
import StayInTouch from './Components/StayInTouch';
import Footer from './Components/Footer';
import Location from './Components/Location';

function App() {
  return (
    <>
      <RadheyNav />
      <HeroSection />
      <Manufacturing />
      <WhyChooseus />
      <StayInTouch />
      <Location />
      <Footer />
    </>
  );
}

export default App;
