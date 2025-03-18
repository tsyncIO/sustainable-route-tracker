import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const FlightEmissionsChart = ({ emissions, source, destination }) => {
  // Chart data
  const chartData = {
    labels: [`${source} → ${destination}`], // Label for the bar
    datasets: [
      {
        label: 'Carbon Emissions (kg CO2)',
        data: [emissions], // Emissions value for the bar
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
    scales: {
      y: {
        beginAtZero: true, // Start y-axis from 0
        title: {
          display: true,
          text: 'Carbon Emissions (kg CO2)', // Y-axis label
        },
      },
      x: {
        ticks: {
          autoSkip: false, // Ensure all labels are displayed
          maxRotation: 0, // Prevent label rotation
          callback: function (value, index, ticks) {
            // Display the label for the bar
            return chartData.labels[index];
          },
        },
        title: {
          display: true,
          text: 'Flight Route', // X-axis label
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            // Custom tooltip label
            return `Emissions: ${context.raw} kg CO2`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default FlightEmissionsChart;