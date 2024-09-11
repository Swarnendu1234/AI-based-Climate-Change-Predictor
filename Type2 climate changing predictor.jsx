import React, { useState } from 'react';
import { FaChartLine, FaCloudUploadAlt, FaSave, FaCommentAlt } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

const SwarnAIClimatePredictorApp = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [predictionData, setPredictionData] = useState(null);

  const handleStartPrediction = () => {
    setCurrentPage('input');
  };

  const handleSubmitData = (data) => {
    // Simulate AI prediction
    const mockPrediction = {
      globalTemperature: 2.5,
      seaLevelRise: 0.5,
      extremeWeatherEvents: 30,
      regions: [
        { name: 'North America', impact: 'High' },
        { name: 'Europe', impact: 'Medium' },
        { name: 'Asia', impact: 'Very High' },
        { name: 'Africa', impact: 'Severe' },
        { name: 'South America', impact: 'High' },
        { name: 'Oceania', impact: 'Medium' },
      ],
    };
    setPredictionData(mockPrediction);
    setCurrentPage('results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <h1 className="text-3xl font-bold text-green-600">SwarnAI Climate Predictor</h1>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        {currentPage === 'landing' && (
          <LandingPage onStartPrediction={handleStartPrediction} />
        )}
        {currentPage === 'input' && (
          <DataInputForm onSubmit={handleSubmitData} />
        )}
        {currentPage === 'results' && (
          <PredictionResults data={predictionData} />
        )}
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 SwarnAI Climate Predictor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const LandingPage = ({ onStartPrediction }) => {
  return (
    <div className="text-center">
      <div className="mb-8">
        <BsGlobe className="text-6xl text-blue-500 mx-auto mb-4" />
        <h2 className="text-4xl font-bold mb-4">Welcome to SwarnAI Climate Predictor</h2>
        <p className="text-xl mb-6">
          Empowering governments and organizations with AI-driven climate predictions
          to make informed decisions and shape effective climate policies.
        </p>
      </div>
      <button
        onClick={onStartPrediction}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Start Climate Prediction
      </button>
    </div>
  );
};

const DataInputForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    temperature: '',
    precipitation: '',
    co2Levels: '',
    deforestationRate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Enter Climate Data</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
            Average Temperature (°C)
          </label>
          <input
            type="number"
            id="temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="precipitation" className="block text-sm font-medium text-gray-700 mb-1">
            Annual Precipitation (mm)
          </label>
          <input
            type="number"
            id="precipitation"
            name="precipitation"
            value={formData.precipitation}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="co2Levels" className="block text-sm font-medium text-gray-700 mb-1">
            CO2 Levels (ppm)
          </label>
          <input
            type="number"
            id="co2Levels"
            name="co2Levels"
            value={formData.co2Levels}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="deforestationRate" className="block text-sm font-medium text-gray-700 mb-1">
            Deforestation Rate (%)
          </label>
          <input
            type="number"
            id="deforestationRate"
            name="deforestationRate"
            value={formData.deforestationRate}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Generate Prediction
          </button>
        </div>
      </form>
    </div>
  );
};

const PredictionResults = ({ data }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Climate Prediction Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Global Indicators</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Global Temperature Rise:</span>
              <span className="font-bold text-red-500">{data.globalTemperature}°C</span>
            </li>
            <li className="flex justify-between">
              <span>Sea Level Rise:</span>
              <span className="font-bold text-blue-500">{data.seaLevelRise} meters</span>
            </li>
            <li className="flex justify-between">
              <span>Extreme Weather Events:</span>
              <span className="font-bold text-orange-500">{data.extremeWeatherEvents}% increase</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Regional Impact</h3>
          <ul className="space-y-2">
            {data.regions.map((region, index) => (
              <li key={index} className="flex justify-between">
                <span>{region.name}:</span>
                <span className={`font-bold ${getImpactColor(region.impact)}`}>{region.impact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
          <FaSave className="mr-2" /> Save Prediction
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
          <FaCommentAlt className="mr-2" /> Provide Feedback
        </button>
      </div>
    </div>
  );
};

const getImpactColor = (impact) => {
  switch (impact.toLowerCase()) {
    case 'low':
      return 'text-green-500';
    case 'medium':
      return 'text-yellow-500';
    case 'high':
      return 'text-orange-500';
    case 'very high':
    case 'severe':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
};

export default SwarnAIClimatePredictorApp;