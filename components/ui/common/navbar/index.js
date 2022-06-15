import Link from "next/link";
import Image from "next/image";
import { useWeb3 } from "@components/providers";
import {Button} from "@components/ui/common";
import { useAccount } from "@components/web3/hooks/useAccount";



export default function Navbar() { 
  const token = 500;
  const { connect, isWeb3Loaded,isLoading } = useWeb3();
  const { account } = useAccount()
  return (
    <>

      <header className="shadow-sm bg-gray-900">
        {account}
        <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 self-center mr-2">
              <Image
                className="self-center"
                src="/logo.png"
                alt="logo"
                height="64px"
                width="64px"
              />
            </div>

            <form className="hidden mb-0 lg:flex">
              <div className="relative">
                <input
                  className="h-10 pr-10 text-sm text-slate-200 bg-slate-800 placeholder-gray-200 border-gray-100 rounded-lg focus:z-10"
                  placeholder="Search..."
                  type="text"
                />

                <button
                  className="absolute inset-y-0 right-0 p-2 mr-px text-gray-300 rounded-r-lg"
                  type="submit"
                >
                  <svg
                    className="w-5 h-5 hover:text-slate-900 hover:bg-green-100 hover:rounded-md hover:px-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <nav className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0">
            <Link href="/">
              <a className="text-gray-300 hover:text-slate-900 hover:bg-green-100 hover:rounded-md hover:px-2 hover:py-1">
                Dashboard
              </a>
            </Link>
            <Link href="/">
              <a className="text-gray-300 hover:text-slate-900 hover:bg-green-100 hover:rounded-md hover:px-2 hover:py-1">
                My Collection
              </a>
            </Link>
            <Link href="/topArtists">
              <a className="text-gray-300 hover:text-slate-900 hover:bg-green-100 hover:rounded-md hover:px-2 hover:py-1">
                Top Artist
              </a>
            </Link>
            <Link href="/buyTokens">
              <a className="text-gray-300 hover:text-slate-900 hover:bg-green-100 hover:rounded-md hover:px-2 hover:py-1">
                Buy Tokens
              </a>
            </Link>
          </nav>

          {isLoading ? 
              <Button disabled = {true} onClick={connect}>Loading</Button> 
              : isWeb3Loaded ?
              <Button onClick={connect}>Connect</Button>
           : (
            <Button onClick={() =>window.open('https://metamask.io/')}>Install Metamask</Button>
          )}
        </div>
      </header>
    </>
  );
}


{/* <div className="items-center hidden bg-slate-700 space-x-6 m-3 lg:flex">
                <span className="px-5 py-2 text-sm text-gray-200 ">
                  Tokens Colleted: {token}
                </span>
              </div>
              <div className="items-center hidden space-x-6 m-3 lg:flex ">
                <a
                  className="px-5 py-2 text-sm font-medium text-gray-200 bg-gray-500 rounded-lg hover:text-slate-900 hover:bg-green-100 hover:rounded-md"
                  href=""
                >
                  Create
                </a>
              </div>
              <div className="items-center  hidden space-x-8 lg:flex">
                <Image
                  className="h-12 w-12 self-center rounded-full"
                  src="/profile.jpg"
                  height='50px'
                  width='50px'
                  alt="Profile"
                />
              </div>*/}
