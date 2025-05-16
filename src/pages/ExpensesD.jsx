// src/pages/ExpensesDashboard.jsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Sidebar from './Sidebar';
import { ChevronRight } from "lucide-react";
import Navbar from '../components/Navbar';


const dropdownOptions = {
  supplier: ['Supplier A', 'Supplier B', 'Supplier C'],
  category: ['Fertilizer', 'Feed', 'Labor', 'Utilities']
};

export default function ExpensesDashboard() {
  const [formData, setFormData] = useState({
    supplier: '',
    unitPrice: '',
    quantity: '',
    amount: '',
    description: '',
    category: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
    <div className="bg-gray-100 min-h-screen flex">
         <Sidebar/>   
           <main className="flex-1 p-6">
          <SearchBar /> 
    <div className="p-6">
      {/* Navigation Indicator */}
            <div className="flex items-center text-gray-700 text-sm font-medium">
              <span>Home</span>
              <ChevronRight className="mx-2" size={16} />
              <span className="text-black-600">Expenses</span>
            </div>
      <br />
      <div className="bg-white">
      <h1 className="text-2xl font-bold mb-6 px-3 py-2">Add Expenditure Record</h1>
       <hr/>

      <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Supplier */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-gray-700 mb-2">Supplier</h2>
          <select
            value={formData.supplier}
            onChange={(e) => handleChange('supplier', e.target.value)}
            className="w-full p-2 border rounded text-sm"
          >
            <option value="">Search for supplier</option>
            {dropdownOptions.supplier.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Unit Price */}
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-gray-700 mb-2">Unit Price</h2>
          <input
            type="text"
            placeholder="Enter unit price"
            value={formData.unitPrice}
            onChange={(e) => handleChange('unitPrice', e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        {/* Quantity */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-gray-700 mb-2">Quantity</h2>
          <input
            type="text"
            placeholder="qty"
            value={formData.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        {/* Amount */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-gray-700 mb-2">Amount</h2>
          <input
            type="text"
            placeholder="Amount (calculate"
            value={formData.amount}
            onChange={(e) => handleChange('amount', e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        {/* Description */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-gray-700 mb-2">Item / Description</h2>
          <input
            type="text"
            placeholder="Enter description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        {/* Category */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-gray-700 mb-2">Category</h2>
          <select
            value={formData.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full p-2 border rounded text-sm"
          >
            <option value="" className='font-bold'>ACQUISITION</option>
            {dropdownOptions.category.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 mb-6 mr-5 rounded hover:bg-blue-600 transition">
          Save Record
         </button>
           </div>

       </div>

      <div className="bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-black-600">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Supplier</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* No data rows yet */}
          </tbody>
        </table>
      </div>

      <br />
      <hr />
      
      <div className="mt-14  flex items-center justify-center space-x-4">
        <div className="rounded font-semibold">
        <button className="px-3 py-1 bg-gray-100 text-sm ">Previous</button>
    
        <button className="px-3 py-1   bg-gray-300 text-sm ">Next</button>
        </div>
      </div>


        <br/><br />
        </div>
    </div>
    </main>
    </div>
    <Navbar />
    </>
  );
}
