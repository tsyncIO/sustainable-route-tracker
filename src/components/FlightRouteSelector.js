import React from 'react';

const FlightRouteSelector = ({ flightRoutes, onSelectRoute }) => {
  return (
    <div className="flight-routes">
      <label>Select Flight Route:</label>
      <select onChange={(e) => onSelectRoute(JSON.parse(e.target.value))}>
        <option value="">Select a route</option>
        {flightRoutes.map((route, index) => (
          <option key={index} value={JSON.stringify(route)}>
            {route.departure.airport} ({route.departure.iata}) → {route.arrival.airport} ({route.arrival.iata})
          </option>
        ))}
      </select>
    </div>
  );
};

export default FlightRouteSelector;