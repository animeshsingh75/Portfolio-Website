import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
