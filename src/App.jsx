import "./App.css";
import Aparthotels from "./components/Aparthotels";
import Card from "./components/Card";
import Destinations from "./components/Destinations";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Reviews2 from "./components/Reviews2";
import Section from "./components/Section";
import Showcase from "./components/Showcase";
import Subscribe from "./components/Subscribe";

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
      <Subscribe />
      <Reviews2 />
      <Footer />
    </div>
  );
}

export default App;
