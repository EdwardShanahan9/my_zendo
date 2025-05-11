import React from "react";

const Login = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl mb-8">Log In</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition"
      >
        Sign Up
      </button>

      <p className="text-sm text-center mt-4">
        Don’t have an account?{" "}
        <a
          href="/auth/signup"
          className="text-primary underline hover:text-opacity-80"
        >
          Sign up
        </a>
      </p>
    </form>
  );
};

export default Login;
