import React from 'react';

const MetricCard = ({ metric, label, icon }) => {
  return (
    <div className="inline-flex items-center dark:text-gray-100">
    <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center text-green-600 bg-green-100 rounded-full mr-6 transition-colors group-hover:bg-green-100 group-hover:text-green-500">
            {icon}
        </div>
      <div>
        <span className="block text-2xl font-bold text-gray-800 dark:text-gray-100">
          {metric}
        </span>
        <span className="block text-gray-500 dark:text-gray-400">
          {label}
        </span>
      </div>
    </div>
  );
};

export default MetricCard;



