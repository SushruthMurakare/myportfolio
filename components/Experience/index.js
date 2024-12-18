import React from "react";

const Experience = ({ title, organization, location, started, ended, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-4 first:ml-0 link bg-white shadow-md hover:shadow-lg transition-shadow ease-out duration-300"
      onClick={onClick}
    >
      {/* Content Section */}
      <h1 className="text-2xl font-semibold">{title || "Job Title"}</h1>
      <h2 className="text-xl font-medium text-gray-700 mt-1">
        {organization || "Organization Name"}
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        {location || "Location"} | {started || "Start Date"} - {ended || "End Date"}
      </p>

      {/* Description */}
      {description && description.length > 0 && (
        <ul className="mt-3 list-disc list-inside text-gray-600">
          {description.map((point, index) => (
            <li key={index} className="mb-1">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Experience;
