/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState,useRef } from 'react';
import { ethers } from 'ethers';
import blockAbi from '../contract/BlockTune.json'
import Web3 from 'web3';



export default function index() {
  const { abi }=blockAbi

  const Address="0xd8fB9104c6f31De3eA9C225722568075431Ddc73"
  const Api='https://eth-rinkeby.alchemyapi.io/v2/X4CHw1gb78dgqMSwe0avqRuTMLEwNDgF'
  const key="9253088a3c044932e4ad417781ada9c2aa71b65f22223ff0a89c1a63b731e6a4"
 
  const [currentAccount, setCurrentAccount] = useState('');
  const [loading, setLoading] = useState('');
  const [projects, setProjects] = useState([]);
  const [cfContract, setCFContract] = useState({});
  const nameRef = useRef();
  const imageRef = useRef();
  const artistRef = useRef();
  const linkRef = useRef();
  const [correctNetwork, setCorrectNetwork] = useState(false);
  
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId'})
      console.log('Connected to chain:' + chainId)

      const rinkebyChainId = '0x4'

      if (chainId !== rinkebyChainId) {
        alert('You are not connected to the Rinkeby Testnet!')
        return
      } else {
        setCorrectNetwork(true);
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      console.log('Found account', accounts[0])
      setCurrentAccount(accounts[0])
      artistRef.current.value=accounts[0]
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }


  const addSong= async (e)=>{
    e.preventDefault();

    let song = {
      'songName': nameRef.current.value,
      'songArtist': artistRef.current.value,
      'musicHash': linkRef.current.value,
      'songImage':imageRef.current.value

    };
    console.log(song)
    try {
      const {ethereum} = window

      if(ethereum) {
        
        const provider = new ethers.providers.Web3Provider(ethereum);
        
        // const provider = new ethers.providers.AlchemyProvider(network="rinkeby", Api);

        const signer = provider.getSigner();
        // Contract
        console.log("eta samma")
       
        
        const BlockTuneContract = new ethers.Contract(Address, abi , signer);
       
        BlockTuneContract.storeSong(song.songName,song.songArtist,song.musicHash,song.songImage)
        .then(response => {
          console.log("Completed Task");
        })
        .catch(err => {
          console.log("Error occured while adding a new song hai -------------");
        });;

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error problem here bhai saap", error);
    }

   
  };
  

  useEffect(() => {
   
    connectWallet()
   
}, []);
  
  return (
    <>
    <div className="my-auto bg-gradient-to-t from-slate-900 to-slate-500">
      <div className="justify-center w-screen-[600px] sm:max-w-screen-md sm:ml-80">
        <div className=""></div>

        <div className="mt-5 md:mt-0 md:col-span-2 ">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6"></div>

                <div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="Name of Artist"
                    >
                      Artist
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      ref={artistRef}
                      placeholder="Name of Artist"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="Name of Artist"
                      
                    >
                      Music Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                     
                      ref={nameRef}
                      placeholder="Title of Music"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="music album cover"
                    >
                      Music Cover Image
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="musicCover"
                      type="text"
                      ref={imageRef}
                      placeholder="Music Image Url"
                    />
                  </div>
             

              <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="Name of Artist"
                    >
                      Music Url
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="musicUrl"
                      type="text"
                      ref={linkRef}
                      placeholder="music mp3 url"
                    />
                  </div>
                  </div>

               
                
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  onClick={addSong}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5"></div>
        </div>
      </div>
      </div>
    </>
  );
}
