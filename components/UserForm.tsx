"use client"
import{useState} from "react"



export default function UserForm({addUser}:any) {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[role,setRole] = useState("Admin");
  const[status,setStatus]= useState("Active");

  const handleSubmit = (e:any)=>{
    e.preventDefault()
    const newUser ={
      name,
      email,
      role,
      status,
      createdDate:new Date().toLocaleDateString()
    }
    addUser(newUser)
  }

  return (

    <div className="border p-4 mt-6 w-96">

      <h2 className="text-xl font-semibold mb-4">
        Add User
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full rounded text-black dark:text-white bg-white dark:bg-gray-800"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
         onChange={(e)=>setEmail(e.target.value)}
         required


        />

        <select
         className="border p-2 bg grey-900 text-white"
          value={role}
          onChange={(e)=>setRole(e.target.value)}
          className ="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg "
         >

          <option>Admin</option>
          <option>User</option>
          <option>Manager</option>
        </select>

        <select 
        className="border p-2"
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
         className ="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg "
          >
          <option>Active</option>
          <option>Inactive</option>
          
        </select>

        <button type="submit" className="bg-blue-500 text-white p-2">
          Add User
        </button>

      </form>

    </div>

  )
}