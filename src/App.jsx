import "./App.css";
import Aparthotels from "./components/Aparthotels";
import Card from "./components/Card";
import Destinations from "./components/Destinations";
import Discover from "./components/Discover";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Section from "./components/Section";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Showcase />
      <Highlights />
      <Section />
      <Destinations />
      <Card />
      <Discover />
      <Aparthotels />
      <Reviews />
    </div>
  );
}

export default App;
