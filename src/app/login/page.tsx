"use client";
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    document.cookie = 'isLoggedIn=true; path=/';
    router.push('/select-role');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-foreground p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 text-gray-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-900 focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            Forgot your credentials? {" "}
            <a href="mailto:giovannimaggio@m-ai.it" className="text-blue-500 hover:text-blue-600">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}