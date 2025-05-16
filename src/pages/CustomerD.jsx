// src/pages/CustomerDashboard.jsx
import {  React,useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from '../components/Navbar';
import {Pencil, ChevronRight, Trash2} from "lucide-react";
import SearchBar from '../components/SearchBar';

const initialCustomers = [
  { name: 'Hassan', email: 'hassan@gmail.com', type: 'INDIVIDUAL', phone: '08055885575' },
  { name: 'Ibrahim', email: 'hassan@gmail.com', type: 'INDIVIDUAL', phone: '08055995584' },
  { name: 'Danbaba', email: 'bandababa@gmail.com', type: 'INDIVIDUAL', phone: '09044883343' },
  { name: 'David Kim', email: 'bandababa@gmail.com', type: 'INDIVIDUAL', phone: '09044883343' },
];

//  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// <SearchBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />


export default function CustomerD() {
  const [search, setSearch] = useState('');
  const [customers, setCustomers] = useState(initialCustomers);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [customerType, setCustomerType] = useState('');


  const handleDelete = index => {
    const newCustomers = [...customers];
    newCustomers.splice(index, 1);
    setCustomers(newCustomers);
  };

  const handleEdit = index => {
    alert(`Edit row ${index + 1}`);
  };

  return (
    <>
    
    <div className="bg-gray-100 min-h-screen flex">
     <Sidebar/>   
       <main className="flex-1 p-6">
      <SearchBar /> 

      <div className="p-6 space-y-6">
      {/* Navigation Indicator */}
                  <div className="flex items-center text-gray-700 text-sm font-medium">
                    <span>Home</span>
                    <ChevronRight className="mx-2" size={16} />
                    <span className="text-black-600">Customers</span>
                  </div>

         <div className="bg-white">
         <h1 className="text-2xl font-bold mb-6 px-3 py-2">Customers</h1>
       <hr/>


      {/* Profile card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
  {/* Customer Name */}
  <div className="bg-white p-4 rounded shadow">
    <h2 className="font-semibold text-gray-700 mb-2">Customer Name</h2>
    <input
      type="text"
      placeholder="Enter customer Name"
      value={searchName}
      onChange={(e) => setSearchName(e.target.value)}
      className="w-full p-2 border rounded text-sm"
    />
  </div>

  {/* Email */}
  <div className="bg-white p-4 rounded shadow">
    <h2 className="font-semibold text-gray-700 mb-2">Email</h2>
    <input
      type="email"
      placeholder="Enter email"
      value={searchEmail}
      onChange={(e) => setSearchEmail(e.target.value)}
      className="w-full p-2 border rounded text-sm"
    />
  </div>

  {/* Phone Number */}
  <div className="bg-white p-4 rounded shadow">
    <h2 className="font-semibold text-gray-700 mb-2">Phone Number</h2>
    <input
      type="tel"
      placeholder="Enter Phone Number"
      value={searchPhone}
      onChange={(e) => setSearchPhone(e.target.value)}
      className="w-full p-2 border rounded text-sm"
    />
  </div>

  {/* Customer Type Dropdown */}
  <div className="bg-white p-4 rounded shadow">
    <h2 className="font-semibold text-gray-700 mb-2">Customer Type</h2>
    <select
      value={customerType}
      onChange={(e) => setCustomerType(e.target.value)}
      className="w-full p-2 border rounded text-sm"
    >
      <option value=""></option>
      <option value="individual">Individual</option>
      <option value="corporate">Corporate</option>
      <option value="vip">VIP</option>
    </select>
  </div>
</div>



      <div className="flex justify-end mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 mb-6 mr-5 rounded hover:bg-blue-600 transition">
          Save Record
         </button>
           </div>


      <div className="overflow-x-auto px-4">
        <table className="min-w-full bg-white border rounded">
          <thead>
            <tr className="bg-gray-100 text-left  text-sm">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Customer Type</th>
              <th className="p-2 border">Phone Number</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={index} className="text-sm border-t ">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{customer.name}</td>
                <td className="p-2 border">{customer.email}</td>
                <td className="p-2 border">{customer.type}</td>
                <td className="p-2 border">{customer.phone}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className=" text-blue-500 hover:text-blue-600"
                  >
                    <Pencil/>
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className=" text-red-500 hover:text-red-600"
                  >
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4">
        <div className="bg-gray-300 rounded">
        <button className="px-3 py-1 text-sm ">Previous</button>
        <span className="text-sm px-4 py-1 bg-blue-500 hover:bg-blue-600 font-medium">1</span>
        <button className="px-3 py-1 text-sm ">Next</button>
        </div>
      </div>
      </div>
      </main>
      
    </div>
    
    <Navbar />

    </>
  );
}
