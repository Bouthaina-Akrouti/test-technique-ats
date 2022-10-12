import FooterMobile from './components/footer-mobile/footer';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './container/home';
import HomeMoboile from './container/home-mobile';

function App() {
  const width = window.innerWidth;
  return (
    <div className="App">
      <Header />
      {
        width > 900 ? <Home /> : <HomeMoboile />
      }
      {
        width > 900 ? <Footer /> : <FooterMobile />
      }
      
    </div>
  );
}

export default App;
