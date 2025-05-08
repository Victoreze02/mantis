import {
  LayoutDashboard,
  Users,
  DollarSign,
  FileText,
  BarChart4,
  UploadCloud,
  ReceiptText,
  TrendingUp,
  TrendingDown,
  CircleGauge
} from "lucide-react";

import { useState } from "react";

const SidebarSection = ({ icon: Icon, label, children }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  return (
    <div className="text-sm">
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
        onClick={() => hasChildren && setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <Icon size={18} />
          <span>{label}</span>
        </div>
        {hasChildren && (
          <div>
            {open ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
          </div>
        )}
      </div>
      {open && hasChildren && (
        <div className="ml-6">
          {children.map(({ label, icon: ChildIcon }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black cursor-pointer"
            >
              <ChildIcon size={16} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r shadow-sm">
      <h2 className="text-xl font-bold px-4 py-4 border-b">Mantis</h2>
      <nav className="py-4 space-y-1">
        <SidebarSection
          icon={LayoutDashboard}
          label="Dashboard"
          children={[
            {label: "Default", icon: CircleGauge }
          ]}
        />

        <SidebarSection
          icon={Users}
          label="Farm Management"
          children={[
            { label: "Customers", icon: Users },
            { label: "Income", icon: DollarSign },
            { label: "Expenses", icon:ReceiptText },
          ]}
        />

        <SidebarSection
          icon={BarChart4}
          label="Reports"
          children={[
            { label: "Sales Expenses", icon: ReceiptText },
            
          ]}
        />

        <SidebarSection
          icon={UploadCloud}
          label="Uploads"
          children={[
            { label: "Upload Expenses", icon: ReceiptText },
            { label: "Upload Income", icon: DollarSign },
          ]}
        />
      </nav>
    </aside>
  );
}
