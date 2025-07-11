import { useState } from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Sidebar from "../pages/Sidebar";
import Profilecards from "./Profilecards";
import Tables from "./Tables";
import SearchBar from "../components/SearchBar";

 
function Dashboard() {
    //  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return (
  <>
  
    <div className="bg-gray-100 min-h-screen   flex">
    <Logo />
      
      {/* Sidebar */} 
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <SearchBar />

        {/* <div className="flex h-screen">
      {isSidebarOpen && <Sidebar />}
      <div className="flex-1 flex flex-col">
        <SearchBar
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        /> */}
        {/* Your main content here */}
      {/* </div>
    </div> */}


    
        {/* Profile Cards */}

        <div className="flex  gap-6">
        <Profilecards
          title="Total Amount"
          amount="442,236"
          percentage="59.3%"
          trend="up"
          caption="You made an extra "
          figure="35,000"
          caption2=" this year"
        />
        <Profilecards
          title="Total Customers"
          amount="78,250"
          percentage="70.5%"
          trend="up"
          caption="You made an extra "
          figure="8,900"
          caption2=" this year"
        />
        <Profilecards
          title="Total KG"
          amount="18,800"
          percentage="27.4%"
          trend="down"
          caption="You made an extra "
           figure="1,943"
          caption2=" this year"
        />
        <Profilecards
          title="Total Sales"
          amount="N35,078"
          percentage="27.4%"
          trend="down"
          caption="You made an extra "
           figure="$20,395"
          caption2=" this year"
        />
        </div>
      
        {/* Table */}
        <Tables />
      </main>
    </div>
    <Navbar />
    </>
  );
}

export default Dashboard;
