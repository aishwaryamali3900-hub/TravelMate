import { supabase } from "../supabase";
import { useState } from "react";


function MyTrips() {
  const [trips, setTrips] = useState([]);

  async function getTrips() {
    const { data, error } = await supabase
      .from("trips")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Failed to retrieve trips");
      return;
    }

    setTrips(data);
  }

  return (
    <main className="trips-page">
      <h1>My Trips</h1>

      <button className="trips-button" onClick={getTrips}>
        View My Trips
      </button>

      <div className="trips-table-wrapper">
        <table className="trips-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Destination</th>
              <th>Travel Date</th>
              <th>Travelers</th>
              <th>Trip Type</th>
            </tr>
          </thead>

          <tbody>
            {trips.map((trip) => (
              <tr key={trip.id}>
                <td>{trip.name}</td>
                <td>{trip.destination}</td>
                <td>{trip.travel_date}</td>
                <td>{trip.travelers}</td>
                <td>{trip.trip_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default MyTrips;