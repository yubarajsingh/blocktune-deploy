export default function Navbar() {
  const isConnected = false;
  const token = 500;
  return (
    <>
      <header className="shadow-sm bg-gray-900">
        <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
          <div className="flex flex-1 w-0 lg:hidden">
            <button
              className="p-2 text-gray-600 bg-gray-100 rounded-full"
              type="button"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="h-17 w-17 self-center mr-2">
              <img className="h-16 w-16 self-center" src="/logo.png" />
            </div>

            <form className="hidden mb-0 lg:flex">
              <div className="relative">
                <input
                  className="h-10 pr-10 text-sm bg-slate-800 placeholder-gray-200 border-gray-900 rounded-lg focus:z-10"
                  placeholder="Search..."
                  type="text"
                />

                <button
                  className="absolute inset-y-0 right-0 p-2 mr-px text-gray-300 rounded-r-lg"
                  type="submit"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="flex justify-end flex-1 w-0 lg:hidden">
            <button
              className="p-2 text-gray-500 bg-gray-100 rounded-full"
              type="button"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <nav className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0">
            <a className="text-gray-300" href="/">
              Home
            </a>
            <a className="text-gray-300" href="">
              My Collection
            </a>
            <a className="text-gray-300" href="">
              Top Artist
            </a>
            <a className="text-gray-300" href="">
              Buy Tokens
            </a>
          </nav>

          {isConnected ? (
            <>
              <div className="items-center hidden bg-slate-700 space-x-6 m-3 lg:flex">
                <span className="px-5 py-2 text-sm text-gray-200 ">Tokens Colleted: {token} </span>
              </div>
              <div className="items-center hidden space-x-6 m-3 lg:flex">
                <a
                  className="px-5 py-2 text-sm font-medium text-gray-200 bg-gray-500 rounded-lg"
                  href=""
                >
                  Create
                </a>
              </div>
              <div className="items-center  hidden space-x-8 lg:flex">
                <img
                  className="h-12 w-12 self-center rounded-full"
                  src="/profile.jpg"
                />
              </div>
            </>
          ) : (
            <div className="items-center hidden space-x-4 lg:flex">
              <a
                className="px-5 py-2 text-sm font-medium text-gray-200 bg-blue-700 rounded-lg"
                href=""
              >
                Connect
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
