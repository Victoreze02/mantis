import { TrendingUp, TrendingDown } from 'lucide-react';

export default function Profilecards({
  title,
  amount,
  percentage,
  trend = 'up',
  caption,
  figure,
  caption2 
}) {
  const isUp = trend === 'up';

  return (
    // <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm">
      <h3 className="text-gray-500 text-sm mb-1">{title}</h3>

      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold text-gray-900">{amount}</p>

        <div
          className={`flex items-center px-3 py-1 text-sm font-semibold 
            ${isUp ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}
        >
          {isUp ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
          {percentage}
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-3">  
        {caption}{" "}
      <span className={isUp ? "text-blue-600 font-medium" : "text-yellow-600 font-medium"}>
     {figure}
     </span>
     {caption2}
     </p>
  
    </div>
  );
}
