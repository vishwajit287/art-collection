import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your data efficiently</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">120</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Active Entries</h2>
          <p className="text-3xl font-bold">45</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Pending Requests</h2>
          <p className="text-3xl font-bold">10</p>
        </div>
      </div>

      {/* Recent Entries Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4">John Doe</td>
              <td className="p-4">john@example.com</td>
              <td className="p-4 text-green-500">Active</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Jane Smith</td>
              <td className="p-4">jane@example.com</td>
              <td className="p-4 text-red-500">Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
