import React, { useState } from 'react';
import { FaMapMarkerAlt, FaUpload, FaChartLine, FaSave, FaCommentAlt } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SwarnAIClimatePredictorUI = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [predictionData, setPredictionData] = useState(null);

  const handleStartPrediction = () => {
    setCurrentPage('input');
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    // Simulating prediction result
    const mockPredictionData = [
      { region: 'North America', temperature: 2.5, rainfall: -10, seaLevel: 0.3 },
      { region: 'Europe', temperature: 2.1, rainfall: 5, seaLevel: 0.25 },
      { region: 'Asia', temperature: 3.2, rainfall: 15, seaLevel: 0.4 },
      { region: 'Africa', temperature: 3.8, rainfall: -20, seaLevel: 0.2 },
      { region: 'South America', temperature: 2.7, rainfall: 8, seaLevel: 0.35 },
    ];
    setPredictionData(mockPredictionData);
    setCurrentPage('results');
  };

  const LandingPage = () => (
    <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"}}>
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-5xl font-bold mb-8">SwarnAI Climate Predictor</h1>
        <p className="text-xl max-w-2xl text-center mb-8">
          Empower your climate decisions with our advanced AI model. SwarnAI Climate Predictor helps governments and organizations make informed choices for a sustainable future.
        </p>
        <button
          onClick={handleStartPrediction}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          aria-label="Start using AI model"
        >
          Start Prediction
        </button>
      </div>
    </div>
  );

  const DataInputForm = () => (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Input Climate Data</h2>
          <form onSubmit={handleSubmitData} className="space-y-6">
            <div>
              <label htmlFor="historical-data" className="block text-sm font-medium text-gray-700">
                Historical Data
              </label>
              <div className="mt-1 flex items-center">
                <input
                  type="text"
                  id="historical-data"
                  className="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                  placeholder="Enter historical climate data"
                  required
                />
                <span className="ml-2" title="Upload CSV file">
                  <FaUpload className="h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer" />
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="satellite-images" className="block text-sm font-medium text-gray-700">
                Satellite Images
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  id="satellite-images"
                  className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  accept="image/*"
                  multiple
                />
              </div>
            </div>
            <div>
              <label htmlFor="environmental-params" className="block text-sm font-medium text-gray-700">
                Environmental Parameters
              </label>
              <div className="mt-1">
                <textarea
                  id="environmental-params"
                  rows={3}
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter additional environmental parameters"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Generate Prediction
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const PredictionResults = () => (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Climate Change Prediction Results</h2>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Impact Overview</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="temperature" fill="#FFA500" name="Temperature Change (°C)" />
                  <Bar dataKey="rainfall" fill="#00CED1" name="Rainfall Change (%)" />
                  <Bar dataKey="seaLevel" fill="#4169E1" name="Sea Level Rise (m)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {predictionData.map((data, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 shadow">
                  <h4 className="text-lg font-semibold mb-2">{data.region}</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Temperature Change:</span>
                      <span className="font-medium">{data.temperature}°C</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rainfall Change:</span>
                      <span className="font-medium">{data.rainfall}%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sea Level Rise:</span>
                      <span className="font-medium">{data.seaLevel}m</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
            <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
              <FaSave className="mr-2" />
              Save Prediction
            </button>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              <FaCommentAlt className="mr-2" />
              Provide Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'input' && <DataInputForm />}
      {currentPage === 'results' && <PredictionResults />}
    </div>
  );
};

export default SwarnAIClimatePredictorUI;
