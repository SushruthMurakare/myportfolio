import React from "react";

const Education = ({ institution, degree, location, graduated, gpa, relatedCourses, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-4 first:ml-0 link bg-white shadow-md hover:shadow-lg transition-shadow ease-out duration-300"
      onClick={onClick}
    >
      {/* Header Section */}
      <h1 className="text-2xl font-semibold">{degree || "Degree"}</h1>
      <h2 className="text-xl font-medium text-gray-700 mt-1">
        {institution || "Institution Name"}
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        {location || "Location"} | {graduated ? `Graduation: ${graduated}` : "Graduation Date"}
      </p>

      {/* GPA Section */}
      {gpa && (
        <p className="text-sm text-gray-600 mt-2">
          <strong>GPA:</strong> {gpa}
        </p>
      )}

      {/* Related Courses */}
      {relatedCourses && (
        <p className="text-sm text-gray-600 mt-2">
          <strong>Related Courses:</strong> {relatedCourses}
        </p>
      )}
    </div>
  );
};

export default Education;
