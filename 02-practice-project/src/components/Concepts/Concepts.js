import ConceptsItem from "./ConceptsItem";

function Concepts(props) {
  return (
    <ul id="concepts">
      <ConceptsItem
        image={props.items[0].image}
        title={props.items[0].title}
        desc={props.items[0].description}
      ></ConceptsItem>
      <ConceptsItem
        image={props.items[1].image}
        title={props.items[1].title}
        desc={props.items[1].description}
      ></ConceptsItem>
      <ConceptsItem
        image={props.items[2].image}
        title={props.items[2].title}
        desc={props.items[2].description}
      ></ConceptsItem>
    </ul>
  );
}

export default Concepts;