import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return(
    <section className="main-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </section>
  );
}