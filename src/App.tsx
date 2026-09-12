import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Technologies />
      <main>
        {/* Main content goes here */}
      </main>
    </div>
  );
}

export default App;