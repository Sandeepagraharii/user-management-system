"use client";

import { useState } from "react";
import UserForm from "../components/UserForm";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const addUser = (user: any) => {
    setUsers([...users, user]);
  };
  const sortUsers = () => {
    const sorted = [...users].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setUsers(sorted);

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  const deleteUser = (index: number) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen bg-grey-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400">
        User Management System
      </h1>

      <UserForm addUser={addUser} />

      <input
        type="text"
        placeholder="Search by name or email"
        className="border-2 border-gray-400 p-2 w-full rounded bg-white text-black dark:bg-gray-800 dark:text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="mt-6 w-full border border-grey-700 rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from  cyan-500 to-blue-500 text-white">
          <tr className="bg-cyan-600 text-white">
            <th className="border p-2 cursor-pointer" onClick={sortUsers}>
              Name
            </th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Created Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody className="bg-white dark:bg-gray-800 text-black dark:text-white">
          {users
            .filter(
              (user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()),
            )
            .map((user, index) => (
              <tr key={index} className="hover:bg-grey-800 transition">
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2">{user.status}</td>
                <td className="border p-2">{user.createdDate}</td>
                <td className="border p-2">
                  <button
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                    onClick={() => deleteUser(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
