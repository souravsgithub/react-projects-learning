import Travelled from "./Travelled";

export default function MainContent(props) {
  const places = props.data.map((cardInfo) => {
    return <Travelled {...cardInfo} key={cardInfo.id} />;
  });
  return places;
}
