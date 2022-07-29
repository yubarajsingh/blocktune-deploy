import Link from "next/link";
import Image from "next/image";
import { useWeb3 } from "@components/providers";

import { Button } from "@components/ui/common";
import { useAccount } from "@components/web3/hooks/useAccount";
import { ConnectWallet, useWallet,ConnectButton } from 'web3uikit';
import { Modal } from "@components/ui/model";
import {
  HomeIcon,
  CollectionIcon,
  StarIcon,
} from "@heroicons/react/solid";

export default function Navbar() {
  const { connect, isWeb3Loaded, isLoading } = useWeb3();
  const { account } = useAccount();
  return (
    <>
      <div
        className="sticky bg-[#020218] top-0 z-[1000] flex
    h-[72px] items-center px-10 md:px-12"
      >
        <Image
          src="/BlockTune.png"
          width={90}
          height={68}
          alt="Logo"
          className="cursor-pointer"
        />
        <div className="hidden ml-10 md:flex items-center space-x-7 ">
          <Link href="/">
            <a className="header-link group">
              <HomeIcon className="h-4" />
              <span className="span">Home</span>
            </a>
          </Link>
          <Link href="/mycollections">
            <a className="header-link group">
              <CollectionIcon className="h-4" />
              <span className="span">My Song</span>
            </a>
          </Link>
          <Link href="/topArtists">
            <a className="header-link group">
              <StarIcon className="h-4" />
              <span className="span">Top Artists</span>
            </a>
          </Link>

          {account ? (
            <a className="header-link group" href="#my-modal-3">
              <span className="span">Buy Token</span>
            </a>
          ) : (
            <button disabled={true} href="#my-modal-3">
              <a className="header-link group">
                <span className="span">Buy Token</span>
              </a>
            </button>
          )}

          <div className="modal" id="my-modal-3">
            <Modal/>
          </div>
        </div>

        <div className='absolute inset-y-0 right-44 mr-2 my-4'>
          <form className="hidden mr-3 mb-0 lg:flex">
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

        {isLoading ? (
          <Button disabled={true} onClick={connect}>
            Loading
          </Button>
        ) : isWeb3Loaded ? (
          account ? (
            <>
              <div className="absolute inset-y-0 right-24 mr-2 items-center hidden lg:flex ">
                <a
                  className=" px-5 py-2 text-sm font-medium text-gray-200 bg-gray-500 rounded-lg hover:text-slate-900 hover:bg-green-100 hover:rounded-md"
                  href="./createmusicnfts"
                >
                  Create 
                </a>
              </div>

              <div className="ml-auto items-center  hidden lg:flex">
                <Link href="/profile">
                  <a>
                    <Image
                      className="h-12 w-12 self-center rounded-full"
                      src="/profile.jpg"
                      height="50px"
                      width="50px"
                      alt="Profile"
                    />
                  </a>
                </Link>
              </div>
            </>
          ) : (
            <div className="ml-auto">
              <Button onClick={connect}>Connect</Button>
              
            </div>
          )
        ) : (
          <div className="ml-auto">
            <Button onClick={() => window.open("https://metamask.io/")}>
              Install Metamask
            </Button>
          </div>
        )}
      </div>
    </>
  );
}


