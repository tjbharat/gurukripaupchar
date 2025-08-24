import React from "react";
import remedies from "./remedies.json";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">🌿 गुरु कृपा उपचार</h1>
        <p className="text-gray-600">भारत के घरेलू नुस्ख़े और आयुर्वेदिक उपचार</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {remedies.map((remedy, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-green-800 mb-2">{remedy.title}</h2>
            <p className="text-gray-700 mb-1"><b>सामग्री:</b> {remedy.ingredients}</p>
            <p className="text-gray-700 mb-1"><b>विधि:</b> {remedy.method}</p>
            <p className="text-red-600 text-sm"><b>सावधानी:</b> {remedy.caution}</p>
          </div>
        ))}
      </div>

      <footer className="text-center mt-10 text-gray-600">
        <p>🌸 अपना नुस्ख़ा भेजें: <a href="mailto:share@gurukripaupchar.com" className="text-green-700 underline">share@gurukripaupchar.com</a></p>
      </footer>
    </div>
  );
}

export default App;