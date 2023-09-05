import Card from "../UI/Card";

function Concepts({image, title, desc}) {
  return (
    <Card className="concept">
      <img src={image} alt={image} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </Card>
  );
}

export default Concepts;
