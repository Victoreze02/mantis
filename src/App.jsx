import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CustomerD from "./pages/CustomerD"
import ExpensesD from "./pages/ExpensesD";
import IncomeD from "./pages/IncomeD";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/customerdashboard" element={<CustomerD />} />
       <Route path="/expensesdashboard" element={<ExpensesD/>} />
      <Route path="/incomedashboard" element={<IncomeD />} />
    </Routes>
  );
}

export default App;
