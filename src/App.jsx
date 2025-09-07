import "./App.css";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
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
    </div>
  );
}

export default App;
