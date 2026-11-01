export default function DestinationCard({ place }) {
  return (
    <article className="card">
      <img src={place.image} alt={place.name} loading="lazy" />

      <div className="card-top">
        <span className="card-tag">{place.tag}</span>
        <span className="card-arrow">→</span>
      </div>

      <div className="card-body">
        <span className="card-location">{place.location}</span>
        <h2>{place.name}</h2>
        <p>{place.description}</p>
      </div>
    </article>
  );
}
