import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katie from "/katie.png";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img={katie}
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zeferes"
        price={136}
      /> 
    </>
  );
}