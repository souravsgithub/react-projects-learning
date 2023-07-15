import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";

export default function App() {
  return(
    <section className="main-container">
      <Info />
      <About />
      <Interests />
    </section>
  );
}