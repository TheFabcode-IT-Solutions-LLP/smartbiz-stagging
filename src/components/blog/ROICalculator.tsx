'use client';

import React, { useState } from 'react';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(20);
  const [inquiriesPerDay, setInquiriesPerDay] = useState(100);
  
  const currentCost = employees * hourlyRate * 2080;
  const automatedEmployees = Math.max(2, Math.floor(employees * 0.4));
  const automatedCost = automatedEmployees * hourlyRate * 2080;
  const platformCost = 6000;
  const savings = currentCost - automatedCost - platformCost;
  const roi = ((savings / platformCost) * 100).toFixed(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 my-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">ROI Calculator</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Employees
          </label>
          <input
            type="number"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          
          <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
            Hourly Rate ($)
          </label>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          
          <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
            Daily Inquiries
          </label>
          <input
            type="number"
            value={inquiriesPerDay}
            onChange={(e) => setInquiriesPerDay(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-3">Your Results:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Current Annual Cost:</span>
              <span className="font-bold">${currentCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>After Automation:</span>
              <span className="font-bold">${(automatedCost + platformCost).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Annual Savings:</span>
              <span className="font-bold">${savings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-blue-600 text-lg mt-4 pt-4 border-t">
              <span>First Year ROI:</span>
              <span className="font-bold">{roi}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;