import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import FlightRouteSelector from './components/FlightRouteSelector';
import './App.css';

Chart.register(...registerables);

const fetchAirports = async () => {
  const apiKey = '76e399b187bf819b2cf42c98d11b4595'; // Replace with your AviationStack API key
  const url = `http://api.aviationstack.com/v1/airports?access_key=${apiKey}&limit=100`;

  try {
    const response = await axios.get(url);
    console.log('API Response:', response.data); // Log the full API response
    if (response.data.error) {
      console.error('API Error:', response.data.error.message);
      return [];
    }
    return response.data.data;
  } catch (error) {
    console.error('Error fetching airports:', error);
    return [];
  }
};

const createFlightRoutes = (airports) => {
  const routes = [];
  for (let i = 0; i < airports.length - 1; i++) {
    const departure = airports[i];
    const arrival = airports[i + 1];
    routes.push({
      departure: {
        airport: departure.airport_name,
        iata: departure.iata_code,
        country: departure.country_name || 'Unknown', // Set default value if country is null
      },
      arrival: {
        airport: arrival.airport_name,
        iata: arrival.iata_code,
      },
    });
  }
  return routes;
};

const fetchCarbonEmissions = async (route) => {
  const apiKey = 'UgHrv0tfqDnIaYMcbcGAsw'; // Your Carbon Interface API key
  const url = 'https://www.carboninterface.com/api/v1/estimates';

  const requestBody = {
    type: 'flight',
    passengers: 1,
    legs: [
      {
        departure_airport: route.departure.iata,
        destination_airport: route.arrival.iata,
      },
    ],
  };

  console.log('Request Body:', requestBody); // Log the request body

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('API Response:', response.data); // Log the API response
    if (response.data.data && response.data.data.attributes.carbon_kg) {
      return response.data.data.attributes.carbon_kg; // Return CO2 emissions in kg
    } else {
      return null; // No emissions data available
    }
  } catch (error) {
    console.error('Error fetching carbon emissions:', error);
    return null; // Handle API errors
  }
};

const App = () => {
  const [flightRoutes, setFlightRoutes] = useState([]);
  const [fetchDate, setFetchDate] = useState('');
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [carbonEmissions, setCarbonEmissions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [originateCountry, setOriginateCountry] = useState('');
  const [availableCountries, setAvailableCountries] = useState([]);
  const [topAirports, setTopAirports] = useState([]);

  useEffect(() => {
    const loadAirports = async () => {
      const airports = await fetchAirports();
      console.log('Fetched Airports:', airports); // Debugging log
      const routes = createFlightRoutes(airports);
      console.log('Created Routes:', routes); // Debugging log
      setFlightRoutes(routes);
      setFetchDate(new Date().toISOString().split('T')[0]); // Set the fetch date

      // Extract unique countries
      const countries = [...new Set(routes.map((route) => route.departure.country))];
      setAvailableCountries(countries);
    };

    loadAirports();
  }, []);

  const handleRouteSelect = async (route) => {
    setSelectedRoute(route);
    setIsLoading(true);
    const emissions = await fetchCarbonEmissions(route);
    setCarbonEmissions(emissions);
    setIsLoading(false);
  };

  const handleOriginateSearch = async () => {
    if (!originateCountry) return;

    // Filter routes originating from the specified country
    const filtered = flightRoutes.filter(
      (route) =>
        route.departure.country && // Check if country is not null
        route.departure.country.toLowerCase() === originateCountry.toLowerCase()
    );

    // Fetch CO2 emissions for the filtered routes
    const routesWithEmissions = await Promise.all(
      filtered.map(async (route) => {
        const emissions = await fetchCarbonEmissions(route);
        return { ...route, emissions };
      })
    );

    // Sort by emissions and take the top 5
    const sortedRoutes = routesWithEmissions
      .filter((route) => route.emissions !== null)
      .sort((a, b) => b.emissions - a.emissions)
      .slice(0, 5);

    setTopAirports(sortedRoutes);
  };

  // Update chartData to include source → destination in labels
  const chartData = {
    labels: topAirports.map((route) => `${route.departure.airport} → ${route.arrival.airport}`), // Include source → destination
    datasets: [
      {
        label: 'CO2 Emissions (kg)',
        data: topAirports.map((route) => route.emissions),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Chart options to rotate labels and prevent overlapping
  const chartOptions = {
    scales: {
      x: {
        ticks: {
          autoSkip: false, // Ensure all labels are displayed
          maxRotation: 90, // Rotate labels up to 90 degrees
          minRotation: 45, // Rotate labels at least 45 degrees
        },
      },
    },
  };

  return (
    <div className="App">
      <img src="/stotic.png" alt="Logo" className="logo" /> {/* Add the image */}
      <div className="container">
        {/* Left Side: Existing Functionality */}
        <div className="left-side">
          <h1>Sustainable Route Tracker</h1>
          <p>Showing flight routes for: <strong>{fetchDate}</strong></p>

          <FlightRouteSelector
            flightRoutes={flightRoutes}
            onSelectRoute={handleRouteSelect}
          />

          {isLoading ? (
            <div className="spinner"></div> // Show spinner while loading
          ) : carbonEmissions !== null ? (
            <div className="emissions">
              <h2>CO2 Emissions</h2>
              <p>
                <strong>{selectedRoute.departure.airport} ({selectedRoute.departure.iata}) → {selectedRoute.arrival.airport} ({selectedRoute.arrival.iata})</strong>
              </p>
              <p>Carbon Emissions: <strong>{carbonEmissions} kg CO2</strong></p>
            </div>
          ) : selectedRoute ? (
            <div className="emissions">
              <h2>CO2 Emissions</h2>
              <p>
                <strong>{selectedRoute.departure.airport} ({selectedRoute.departure.iata}) → {selectedRoute.arrival.airport} ({selectedRoute.arrival.iata})</strong>
              </p>
              <p className="error">No CO2 emissions data available for this route.</p>
            </div>
          ) : null}
        </div>

        {/* Right Side: Originate Selection and Visualization */}
        <div className="right-side">
          <h2>Originate Visualization</h2>
          <div className="search-box">
            <label>Select Country:</label>
            <select
              value={originateCountry}
              onChange={(e) => setOriginateCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              {availableCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <button onClick={handleOriginateSearch}>Search</button>
          </div>

          {/* Chart for Top 5 Airports */}
          {topAirports.length > 0 ? (
            <div className="chart">
              <h3>Top 5 Airports by CO2 Emissions</h3>
              <Bar data={chartData} options={chartOptions} />
            </div>
          ) : (
            <p className="error">No data available for the selected country.</p>
          )}
        </div>
      </div>

      <footer>
        <p>Created for STOTIC Project of TMDT</p>
      </footer>
    </div>
  );
};

export default App;