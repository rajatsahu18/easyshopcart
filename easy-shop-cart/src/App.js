import { Banner } from './Components/Banner';
import { NavBar } from './Components/NavBar';
import { AllRoutes } from './Routes/AllRoutes';
import { Footer } from './Routes/Footer';

function App() {
  return (
    <div className="App">
      <Banner/>
      <NavBar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
