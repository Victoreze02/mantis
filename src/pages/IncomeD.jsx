import { useState } from "react";
import { ChevronRight, Calendar } from "lucide-react";
import SearchBar from '../components/SearchBar';
import Sidebar from './Sidebar';
import Navbar from '../components/Navbar';

export default function IncomeD() {
  const [searchFields, setSearchFields] = useState({
    customer: "",
    kg: "",
    price: "",
    grade: "",
    category: "",
  });

  const [filterFields, setFilterFields] = useState({
    customer: "",
    amount: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleSearchChange = (field, value) => {
    setSearchFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };
  // Define it temporarily (you can customize it later)


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
        <span className="text-black-600">Income</span>
      </div>

      <div className="bg-white">
       <h1 className="text-2xl font-bold mb-6 px-3 py-2">Add Sales Record</h1>
       <hr/>


      {/* Income Entry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 text-sm font-semibold">Customer</label>
          <select
            className="w-full p-2 border rounded text-sm"
            value={searchFields.customer}
            onChange={(e) => handleSearchChange("customer", e.target.value)}
          >
            <option value="">Search for customer</option>
            <option value="Customer A">Customer A</option>
            <option value="Customer B">Customer B</option>
          </select>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 text-sm font-semibold">No of Kg</label>
          <input
            type="text"
            placeholder="Enter number of kilo"
            value={searchFields.kg}
            onChange={(e) => handleSearchChange("kg", e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 text-sm font-semibold">Price Per kg</label>
          <input
            type="text"
            placeholder="Enter price per kilo"
            value={searchFields.price}
            onChange={(e) => handleSearchChange("price", e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 text-sm font-semibold">Grade</label>
          <input
            type="text"
            placeholder="e.g 1 or 2"
            value={searchFields.grade}
            onChange={(e) => handleSearchChange("grade", e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 text-sm font-semibold">Category</label>
          <select
            className="w-full p-2 border rounded text-sm"
            value={searchFields.category}
            onChange={(e) => handleSearchChange("category", e.target.value)}
          >
            <option value="">SALES</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </select>
        </div>
      </div>

      {/* Save Button */}
             <div className="flex justify-end mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 mb-6 mr-5 rounded hover:bg-blue-600 transition">
          Save Record
         </button>
           </div>


      </div>

      <div className="bg-white ">
      {/* Filter Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-white mb-6">
        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 text-sm font-semibold">Customer</label>
          <input
            type="text"
            placeholder="Search by Customer"
            value={filterFields.customer}
            onChange={(e) => handleFilterChange("Customer", e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 text-sm font-semibold">Amount</label>
          <input
            type="text"
            placeholder="Search by Amount"
            value={filterFields.amount}
            onChange={(e) => handleFilterChange("amount", e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        <div className="bg-white p-4 rounded shadow relative">
          <label className="block mb-1 text-sm font-semibold">Date From</label>
          <div className="relative font-bold text-black">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              value={filterFields.dateFrom}
              onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
              className="w-full p-2 border rounded text-sm pr-10"
            />
            <Calendar className="absolute top-2.5 right-3 w-4 h-4 text-black" />
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow relative">
          <label className="block mb-1 text-sm font-semibold">Date To</label>
          <div className="relative font-bold text-black">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              value={filterFields.dateTo}
              onChange={(e) => handleFilterChange("dateTo", e.target.value)}
              className="w-full p-2 border rounded text-sm pr-10"
            />
            <Calendar className="absolute text-black top-2.5 right-3 w-4 h-4" />
          </div>
        </div>

        <div className="flex items-end">
          <button className="bg-blue-600 text-white text-sm p-2 px-16 mr-5 rounded hover:bg-blue-700 flex items-center gap-1">
             Filter
          </button>
        </div>
      </div>

      {/* Table Placeholder */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200 ">
            <tr>
              {[
                "#",
                "Name",
                "Email",
                "Customer Type",
                "Phone Number",
                "Action",
              ].map((heading, idx) => (
                <th
                  key={idx}
                  className="text-left px-4 py-2 border-b text-sm text-black-600"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Empty rows initially */}
          </tbody>
        </table>
      </div>
      <br /><br />
            <hr />

      

    

    <div className="mt-14  flex items-center justify-center space-x-4">
        <div className="rounded font-semibold">
        <button className="px-3 py-1 bg-gray-100 text-sm ">Previous</button>
    
        <button className="px-3 py-1   bg-gray-300 text-sm ">Next</button>
        </div>
      </div>

      <br />

      </div>
      </div>
    </main>
    </div>
    <Navbar />
    </>
  );
}
