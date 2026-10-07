function DestinationCard(props) {
  return (
    <div className="destination-card">
      <h2>{props.name}</h2>
      <p>📍 {props.location}</p>
      <p>{props.description}</p>
      <p><strong>Best for:</strong> {props.type}</p>
    </div>
  );
}

export default DestinationCard;