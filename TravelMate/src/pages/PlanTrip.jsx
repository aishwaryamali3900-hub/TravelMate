import { useState } from "react";
import { supabase } from "../supabase";

function PlanTrip() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("");
  const [transport, setTransport] = useState("");
  const [duration, setDuration] = useState("");
  const [saving, setSaving] = useState(false);

  const destinationTypes = {
    Goa: "Beach",
    Manali: "Adventure",
    Kerala: "Nature",
    Mysore: "Heritage",
    Bangalore: "City",
    Coorg: "Nature",
  };

  const tripType = destinationTypes[destination] || "";

  async function handleTrip(e) {
    e.preventDefault();

    if (saving) {
      return;
    }

    if (
      !name ||
      !destination ||
      !travelDate ||
      !travelers ||
      !transport ||
      !duration
    ) {
      alert("Please fill all the details");
      return;
    }

    setSaving(true);

    const tripDetails = {
      name: name,
      destination: destination,
      travel_date: travelDate,
      travelers: Number(travelers),
      trip_type: tripType,
      transport: transport,
      duration: duration,
    };

    const { error } = await supabase
      .from("trips")
      .insert([tripDetails]);

    if (error) {
      console.error(error);
      alert("Trip could not be saved");
      setSaving(false);
      return;
    }

    alert("Trip planned successfully!");

    setSaving(false);
  }

  return (
    <main className="plan-page">

      <h1>Plan Your Trip</h1>

      <form className="trip-form" onSubmit={handleTrip}>

        <label htmlFor="name">
          Your Name
        </label>

        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />


        <label htmlFor="destination">
          Select Destination
        </label>

        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select Destination</option>
          <option value="Goa">Goa</option>
          <option value="Manali">Manali</option>
          <option value="Kerala">Kerala</option>
          <option value="Mysore">Mysore</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Coorg">Coorg</option>
        </select>


        <label htmlFor="tripType">
          Trip Type
        </label>

        <input
          id="tripType"
          type="text"
          value={tripType}
          readOnly
          placeholder="Trip Type will appear automatically"
        />


        <label htmlFor="travelDate">
          Travel Date
        </label>

        <input
          id="travelDate"
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
        />


        <label htmlFor="travelers">
          Number of Travelers
        </label>

        <input
          id="travelers"
          type="number"
          min="1"
          placeholder="Enter number of travelers"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        />


        <label htmlFor="transport">
          Preferred Transport
        </label>

        <select
          id="transport"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
        >
          <option value="">Select Transport</option>
          <option value="Flight">Flight</option>
          <option value="Train">Train</option>
          <option value="Bus">Bus</option>
          <option value="Car">Car</option>
        </select>


        <label htmlFor="duration">
          Trip Duration
        </label>

        <select
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value="">Select Duration</option>
          <option value="2 Days">2 Days</option>
          <option value="3 Days">3 Days</option>
          <option value="5 Days">5 Days</option>
          <option value="7 Days">7 Days</option>
          <option value="10 Days">10 Days</option>
        </select>


        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Plan My Trip"}
        </button>

      </form>


      <div className="trip-result">

        <h2>Your Trip Details</h2>

        <p>
          <strong>Name:</strong>{" "}
          {name || ""}
        </p>

        <p>
          <strong>Destination:</strong>{" "}
          {destination || ""}
        </p>

        <p>
          <strong>Trip Type:</strong>{" "}
          {tripType || ""}
        </p>

        <p>
          <strong>Travel Date:</strong>{" "}
          {travelDate || ""}
        </p>

        <p>
          <strong>Number of Travelers:</strong>{" "}
          {travelers || ""}
        </p>

        <p>
          <strong>Transport:</strong>{" "}
          {transport || ""}
        </p>

        <p>
          <strong>Duration:</strong>{" "}
          {duration || ""}
        </p>

      </div>

    </main>
  );
}

export default PlanTrip;