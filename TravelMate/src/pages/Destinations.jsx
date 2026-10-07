import DestinationCard from "../components/DestinationCard";

function Destinations() {
  return (
    <main className="destinations-page">
      <h1>Explore Destinations</h1>

      <div className="destination-grid">

        <DestinationCard
          name="Goa"
          location="Goa, India"
          description="Enjoy beautiful beaches, sunsets and relaxing holidays."
          type="Beach"
        />

        <DestinationCard
          name="Manali"
          location="Himachal Pradesh, India"
          description="Explore mountains, snow and exciting adventure activities."
          type="Adventure"
        />

        <DestinationCard
          name="Kerala"
          location="Kerala, India"
          description="Experience backwaters, greenery and peaceful nature."
          type="Nature"
        />

        <DestinationCard
          name="Mysore"
          location="Karnataka, India"
          description="Discover palaces, culture and historical places."
          type="Heritage"
        />

        <DestinationCard
          name="Bangalore"
          location="Karnataka, India"
          description="Explore the city, technology hubs, parks and attractions."
          type="City"
        />

        <DestinationCard
          name="Coorg"
          location="Karnataka, India"
          description="Enjoy coffee plantations, hills and beautiful nature."
          type="Nature"
        />

      </div>
    </main>
  );
}

export default Destinations;