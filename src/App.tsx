import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />
      <ToastContainer />
      <main>
        {/* Main content goes here */}
      </main>
    </div>
  );
}

export default App;