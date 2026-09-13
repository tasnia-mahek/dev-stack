import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />
      <main>
        {/* Main content goes here */}
      </main>
    </div>
  );
}

export default App;