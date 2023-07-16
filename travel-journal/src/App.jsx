import Header from "./components/Header";
import MainContent from "./components/MainContent";
import data from "./data.js";
import Travelled from "./components/Travelled";

export default function App() {
  return (
    <>
      <Header />
      <MainContent data={data} />
    </>
  );
}
