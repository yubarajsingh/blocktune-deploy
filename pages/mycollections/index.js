/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import {useRef,useState,useEffect} from "react";
import { getAllSongs } from "@content/songs/fetcher";
import AudioPlayer from "react-h5-audio-player";
import { ethers } from 'ethers';
import {Footer } from "@components/ui/common";
import Web3 from "web3";

import { ContractFunctionVisibility } from "hardhat/internal/hardhat-network/stack-traces/model";
import blockAbi from '../contract/BlockTune2.json'

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function index({ songs }) {
  const { abi }=blockAbi
 

  const Address="0x51980257b881494Cca20ff73eBef93a9f6D5673F"

  const [currentAccount, setCurrentAccount] = useState('');
  const [loading, setLoading] = useState('');
  const [pass, setPass] = useState('');

  const [projects, setProjects] = useState([]);
  const [cfContract, setCFContract] = useState({});
  const [songlist, setSonglist] = useState([]);
  const [pause, setPause] = useState(false);
  const [correctNetwork, setCorrectNetwork] = useState(false);


  const player = useRef();
 
  
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
    
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }

const play = {};
  const audiofunction = (url,pause) => {
    player.current.src=url
    console.log("paise",pause)
    if(pause){
    player.current.pause()
      
    }
    else{

      player.current.play()
    }
  };
  const fetchSongsList = async () => {
    if (window.web3) {
      const { web3 } = window;
      const { ethereum } = window
      // Load Accounts
      
      if(!ethereum){
        console.log("metamask not detected")
      }
      else{
        
        
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        // Set current Account to State
        setCurrentAccount(accounts[0]);
        
                  
                  try {
                      setLoading(true);
                      
                      const provider = new ethers.providers.Web3Provider(ethereum);
                      
                      // const provider = new ethers.providers.AlchemyProvider(network="rinkeby", Api);
                      const signer = provider.getSigner();

                      // Contract
                      const BlockTuneContract = new ethers.Contract(Address, abi,signer);
                      console.log("herere ")
                      const mysong = await BlockTuneContract.getMySong();
                      console.log("mysongs",mysong)
                      setSonglist(mysong)
                      console.log(songlist,"song hai bhai jaan")
                      setLoading(false);
                  } catch (e) {
                    console.log(e)
                    setLoading(false);
                     
                  }
            }
    }

    
};
useEffect(() => {
  setLoading(true)

  connectWallet()
 fetchSongsList()
 setLoading(false)

}, []);
console.log('sonsss',pause)

  return (
    <>

<div className="App">

     
</div>
      <main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
        <div>
        <audio ref={player} >

        </audio>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">
            My Creations
          </h1>
    

          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            

            {songlist.map((song) => (
              <div key={song.songID} className="bg-gray-900 shadow-lg rounded p-3">
                <div className="group relative overflow-hidden" style={{ width: "100%" }}>
                  <img
                    className="w-full md:w-72 block rounded object-cover"
                    src={song.songImage}
                    style={{ width: "100%",height:"200px" }}
                    alt=""
                    
                  />
                  <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </button>

                    <button onClick={()=>{audiofunction(song.musicHash,setPause(false))}}
                    className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-play-circle-fill"
                        viewBox="0 0 16 16"
                      >
                       
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                      </svg>
                    </button>

                    <button
                     
                      
                      className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-three-dots"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </button>
                    
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white text-lg">{song.songName} </h3>
                  <h3 className="text-white text-lg">{song.artist} </h3>

                
                </div>
                        <div class="flex  justify-end">
                            
                       
                          
                          
                        
                      </div>  
                       
              </div>
            ))}
          </section>
          <ToastContainer />
        </div>
     
      </main>
    </>
  );
}


const sendmoney=async(songaddress,currenAddress)=>{


                              let ethereum = window.ethereum;


                              // Request account access if needed
                              await ethereum.enable();
                          
                          
                              let provider = new ethers.providers.Web3Provider(ethereum);
                          
                              // Acccounts now exposed
                              const params = [{
                                  from: currenAddress,
                                  to: songaddress,
                                  value: ethers.utils.parseUnits('0.04', 'ether').toHexString()
                              }];
                          
                              
                              provider.send('eth_sendTransaction', params).then(response=>
                                toast.success('send tip successfully!', {
                                  position: "top-center",
                                  autoClose: 5000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  })
                                ).catch(err=>
                                 
                                  toast.error('error occured!', {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    }))
                             
                              
                                
                              
                             
                               
                                  
                             

}