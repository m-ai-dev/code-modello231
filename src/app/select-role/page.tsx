"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaProductHunt, FaCode, FaChartLine, FaPaintBrush, FaBullhorn, FaSearch, FaUsers } from "react-icons/fa";

export default function SelectRole() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const roles = [
    { id: 1, name: "Product Manager", description: "Oversee product development and strategy.", icon: <FaProductHunt className="w-6 h-6 text-purple-500" /> },
    { id: 2, name: "Software Engineer", description: "Build and maintain software applications.", icon: <FaCode className="w-6 h-6 text-purple-500" /> },
    { id: 3, name: "Data Scientist", description: "Analyze and interpret complex data.", icon: <FaChartLine className="w-6 h-6 text-purple-500" /> },
    { id: 4, name: "UX Designer", description: "Design user-friendly interfaces.", icon: <FaPaintBrush className="w-6 h-6 text-purple-500" /> },
    { id: 5, name: "Marketing Specialist", description: "Plan and execute marketing campaigns.", icon: <FaBullhorn className="w-6 h-6 text-purple-500" /> },
    { id: 6, name: "Project Manager", description: "Manage project timelines and deliverables.", icon: <FaUsers className="w-6 h-6 text-purple-500" /> },
    { id: 7, name: "DevOps Engineer", description: "Streamline development and operations.", icon: <FaCode className="w-6 h-6 text-purple-500" /> },
    { id: 8, name: "Business Analyst", description: "Bridge the gap between IT and business.", icon: <FaChartLine className="w-6 h-6 text-purple-500" /> },
    { id: 9, name: "Content Strategist", description: "Plan and manage content creation.", icon: <FaBullhorn className="w-6 h-6 text-purple-500" /> },
    { id: 10, name: "QA Engineer", description: "Ensure software quality and reliability.", icon: <FaCode className="w-6 h-6 text-purple-500" /> },
    { id: 11, name: "Sales Executive", description: "Drive sales and revenue growth.", icon: <FaBullhorn className="w-6 h-6 text-purple-500" /> },
    { id: 12, name: "HR Manager", description: "Manage recruitment and employee relations.", icon: <FaUsers className="w-6 h-6 text-purple-500" /> },
    { id: 13, name: "Financial Analyst", description: "Analyze financial data and trends.", icon: <FaChartLine className="w-6 h-6 text-purple-500" /> },
    { id: 14, name: "UI Designer", description: "Create visually appealing interfaces.", icon: <FaPaintBrush className="w-6 h-6 text-purple-500" /> },
    { id: 15, name: "Customer Support", description: "Assist customers with product issues.", icon: <FaUsers className="w-6 h-6 text-purple-500" /> },
    { id: 16, name: "Technical Writer", description: "Create documentation for software products.", icon: <FaCode className="w-6 h-6 text-purple-500" /> },
    { id: 17, name: "SEO Specialist", description: "Optimize websites for search engines.", icon: <FaBullhorn className="w-6 h-6 text-purple-500" /> },
    { id: 18, name: "System Administrator", description: "Maintain and troubleshoot IT systems.", icon: <FaCode className="w-6 h-6 text-purple-500" /> },
  ];

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleRoleSelect = (role: string) => {
    if (role === selectedRole) setSelectedRole(null);
    else setSelectedRole(role);
  };

  const handleSubmit = () => {
    if (selectedRole) {
      document.cookie = `businessRole=${selectedRole}; path=/`;
      router.push("/");
    } else alert("Please select a role.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-foreground p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">Select Your Business Role</h2>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search roles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-600" />
        </div>

        {/* Roles List */}
        <div className="roles-list space-y-4 max-h-96 overflow-y-auto">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-purple-500 ${
                selectedRole === role.name ? "bg-purple-300 border-4 border-purple-400" : (
                  selectedRole === "All" ? "bg-gray-400 border-2 border-gray-700" : "bg-purple-50 border-2 border-purple-100"
                )
              }`}
              onClick={() => handleRoleSelect(role.name)}
            >
              <div className="flex items-center space-x-4">
                {role.icon}
                <div>
                  <h3 className="font-semibold text-gray-800">{role.name}</h3>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Select All Option */}
        <div
          className={`p-4 rounded-lg cursor-pointer transition-all hover:border-violet-500 ${
            selectedRole === "All" ? "bg-violet-300 border-4 border-violet-400" : "bg-violet-100 border-2 border-violet-200"
          } ${ filteredRoles.length > 0 ? "mt-6" : "" }`}
          onClick={() => handleRoleSelect('All')}
        >
          <div className="flex items-center space-x-4">
            <FaUsers className="w-6 h-6 text-purple-500" />
            <div>
              <h3 className="font-semibold text-gray-800">All Roles</h3>
              <p className="text-sm text-gray-600">Select all available roles.</p>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Continue
        </button>
      </div>
    </div>
  );
}