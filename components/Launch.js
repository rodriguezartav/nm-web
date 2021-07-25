/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function Example() {
  return (
    <div className="bg-white max-w-lg mx-auto ">
      <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <form className="mt-8 sm:flex">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className=" px-5 py-3 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:max-w-xs border-gray-300 rounded-md"
            placeholder="Mobile Phone"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className=" flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Keep me informed
            </button>
          </div>
        </form>

        <p>dff fd f</p>
      </div>
    </div>
  );
}
