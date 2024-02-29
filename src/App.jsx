function App() {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-violet-900 w-screen h-screen flex items-center">
      <div className="m-auto space-y-5">
        <h1 className="text-white font-medium text-6xl">
          Manejo de Presupuesto
        </h1>
        <div className="relative">
          <input
            className="px-10 py-3 rounded-full min-w-full text-xl text-blue-700 placeholder-blue-700 border-0 focus:outline-none focus:shadow-sm"
            type="text"
            name="submit"
            id="submit"
            placeholder="$ 50000"
          />
          <button className="absolute right-2 top-1 p-3 bg-blue-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#fff"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
