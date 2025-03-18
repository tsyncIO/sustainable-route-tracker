Sustainable Route Tracker

The Sustainable Route Tracker is a web application designed to help users track carbon emissions for flight routes. It fetches flight route data from the AviationStack API and calculates carbon emissions using the Carbon Interface API. The app visualizes the data using interactive charts powered by Chart.js.

Features
Flight Route Selection: Choose from a list of flight routes fetched from the AviationStack API.

Carbon Emissions Calculation: Calculate the carbon emissions for a selected flight route using the Carbon Interface API.

Visualization: View carbon emissions data in an interactive bar chart.

Top Airports by Emissions: Search for the top 5 airports with the highest carbon emissions originating from a specific country.

Responsive Design: The app is fully responsive and works on all devices.

Technologies Used
Frontend: React.js

Charting: Chart.js, react-chartjs-2

API Integration: Axios

Styling: CSS

Routing: React Router DOM

APIs Used
AviationStack API: Fetches airport and flight route data.

Carbon Interface API: Calculates carbon emissions for flight routes.

Setup Instructions
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

API keys for AviationStack and Carbon Interface.

Installation
Clone the repository:

bash
Copy
git clone https://github.com/your-username/sustainable-route-tracker.git
cd sustainable-route-tracker
Install dependencies:

bash
Copy
npm install
Set up environment variables:
Create a .env file in the root directory and add your API keys:

env
Copy
REACT_APP_AVIATIONSTACK_API_KEY=your_aviationstack_api_key
REACT_APP_CARBON_INTERFACE_API_KEY=your_carbon_interface_api_key
REACT_APP_BASENAME=/flight-emissions-tracker # Optional: Only if hosted in a subdirectory
Run the app:

bash
Copy
npm start
The app will be available at http://localhost:3000.

Deployment
To deploy the app to GitHub Pages:

Set the homepage field in package.json:

json
Copy
{
  "homepage": "https://your-username.github.io/flight-emissions-tracker"
}
Install GitHub Pages package:

bash
Copy
npm install gh-pages --save-dev
Add deployment scripts to package.json:

json
Copy
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
Deploy the app:

bash
Copy
npm run deploy
The app will be available at https://your-username.github.io/flight-emissions-tracker.

Usage
Selecting a Flight Route
On the homepage, select a flight route from the dropdown menu.

The app will fetch and display the carbon emissions for the selected route.

Searching for Top Airports by Emissions
Select a country from the dropdown menu in the "Originate Visualization" section.

Click the "Search" button.

The app will display the top 5 airports with the highest carbon emissions originating from the selected country.

Folder Structure
Copy
sustainable-route-tracker/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── FlightEmissionsChart.js
│   │   └── FlightRouteSelector.js
│   ├── App.js               # Main application component
│   ├── App.css              # Application styles
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes and push to the branch.

Submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
AviationStack for providing flight route data.

Carbon Interface for carbon emissions calculations.

Chart.js for data visualization.

Contact
For questions or feedback, please contact:

Your Name - mtanvir360@gmail.com

Project Link: https://github.com/tsyncIO/sustainable-route-tracker