import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/AllUser");
        if (res.data.success) {
          setUsers(res.data.user);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Registered Users
      </h2>

      <div className="overflow-x-auto shadow-md rounded-2xl">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-white border-b">
                #
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-white border-b">
                User Name
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-white border-b">
                Email
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-white border-b">
                Role
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-white border-b">
                Carts
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-white border-b">
                Orders
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-white border-b">
                Created At
              </th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition-all duration-200 border-b"
                >
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                    {user.userName}
                  </td>
                  <td className="py-3 px-4 text-gray-600 text-sm">
                    {user.email}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "admin"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-700 text-sm">
                    {user.carts?.length || 0}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-700 text-sm">
                    {user.orders?.length || 0}
                  </td>
                  <td className="py-3 px-4 text-gray-500 text-sm">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 text-sm italic"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
