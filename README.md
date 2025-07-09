# 🌍 Sustainable Route Tracker  

The **Sustainable Route Tracker** is a web application designed to help users track **carbon emissions** for flight routes. It fetches flight route data from the **AviationStack API** and calculates **carbon emissions** using the **Carbon Interface API**. The app visualizes the data using interactive charts powered by **Chart.js**.  

---

## 🚀 Features  

✅ **Flight Route Selection** – Choose from a list of flight routes fetched from the **AviationStack API**.  
✅ **Carbon Emissions Calculation** – Compute emissions for a selected flight route using the **Carbon Interface API**.  
✅ **Interactive Visualization** – View carbon emissions data in **bar charts**.  
✅ **Top Airports by Emissions** – Identify the **top 5 airports** with the highest emissions for a given country.  
✅ **Responsive Design** – Works on all devices seamlessly.  

---

## 🛠️ Technologies Used  

| **Category**       | **Tech Stack**       |
|--------------------|---------------------|
| **Frontend**      | React.js             |
| **Charting**      | Chart.js, react-chartjs-2 |
| **API Integration** | Axios                |
| **Styling**       | CSS                  |
| **Routing**       | React Router DOM     |

---

## 🌐 APIs Used  

🔹 **[AviationStack API](https://aviationstack.com/)** – Fetches airport and flight route data.  
🔹 **[Carbon Interface API](https://carboninterface.com/)** – Calculates carbon emissions for flight routes.  

---

## 📦 Setup Instructions  

### 🔧 Prerequisites  
- **Node.js** (v16 or higher)  
- **npm** (v8 or higher)  
- **API keys** for AviationStack and Carbon Interface  

### 📥 Installation  

1️⃣ **Clone the repository**  
\`\`\`bash
git clone https://github.com/your-username/sustainable-route-tracker.git
cd sustainable-route-tracker
\`\`\`

2️⃣ **Install dependencies**  
\`\`\`bash
npm install
\`\`\`

3️⃣ **Set up environment variables**  
Create a `.env` file in the root directory and add your API keys:  
\`\`\`env
REACT_APP_AVIATIONSTACK_API_KEY=your_aviationstack_api_key
REACT_APP_CARBON_INTERFACE_API_KEY=your_carbon_interface_api_key
REACT_APP_BASENAME=/flight-emissions-tracker  # Optional: Only if hosted in a subdirectory
\`\`\`

4️⃣ **Run the app locally**  
\`\`\`bash
npm start
\`\`\`
The app will be available at **http://localhost:3000**.  

---

## 🚀 Deployment  

### 📡 Deploying to GitHub Pages  

1️⃣ **Set the `homepage` field in `package.json`**  
\`\`\`json
{
  "homepage": "https://your-username.github.io/sustainable-route-tracker"
}
\`\`\`

2️⃣ **Install the GitHub Pages package**  
\`\`\`bash
npm install gh-pages --save-dev
\`\`\`

3️⃣ **Add deployment scripts in `package.json`**  
\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
\`\`\`

4️⃣ **Deploy the app**  
\`\`\`bash
npm run deploy
\`\`\`

✅ **Live App URL:**  
The app will be available at **https://your-username.github.io/sustainable-route-tracker**.

---

## 📌 Usage  

### ✈️ **Selecting a Flight Route**  
1️⃣ On the homepage, select a **flight route** from the dropdown menu.  
2️⃣ The app fetches and displays **carbon emissions** for the selected route.  

### 🌎 **Searching for Top Airports by Emissions**  
1️⃣ Select a **country** from the dropdown in the "Originate Visualization" section.  
2️⃣ Click **"Search"** to view the **top 5 airports** with the highest emissions.  

---

## 📂 Folder Structure  

\`\`\`
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
\`\`\`

---

## 🤝 Contributing  

Contributions are **welcome!** 🚀 If you'd like to contribute:  

1️⃣ **Fork the repository**  
2️⃣ **Create a new branch** for your feature or bugfix  
3️⃣ **Commit** your changes and push to the branch  
4️⃣ **Submit a pull request**  

---

## CLI
CLI functionality will be added.

## 📜 License  

This project is licensed under the **MIT License**. See the **LICENSE** file for details.  

---

## 🙌 Acknowledgments  

- **[AviationStack](https://aviationstack.com/)** – Flight route data  
- **[Carbon Interface](https://carboninterface.com/)** – Carbon emissions calculations  
- **[Chart.js](https://www.chartjs.org/)** – Data visualization  

---

## 📞 Contact  

📧 **Your Name** – [mtanvir360@gmail.com](mailto:mtanvir360@gmail.com)  

🔗 **Project Link** – [GitHub Repo](https://github.com/tsyncIO/sustainable-route-tracker)  

---

### ⭐ If you like this project, give it a **star** on GitHub! ⭐  

