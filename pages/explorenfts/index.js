/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { getAllSongs } from "@content/songs/fetcher";

export default function index({songs}) {
  const wholeList = [
    {
      image: "nft1.png",
      artist: "christin",
      song: "Let me go",
      price: "10",
    },
    {
      image: "nft2.jpg",
      artist: "Samdsk",
      song: "Damm crazy ",
      price: "12.8",
    },
    {
      image: "nft4.png",
      artist: "Ozudr",
      song: "Let's rock & roll",
      price: "13.2",
    },
    {
      image: "nft1.png",
      artist: "christin",
      song: "Let me go",
      price: "10",
    },
    {
      image: "nft2.jpg",
      artist: "Samdsk",
      song: "Damm crazy ",
      price: "12.8",
    }
    
  ]
  return (
    <>
      <div className=" h-screen py-3 px-3 place-items-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gradient-to-t from-blue-200 to-indigo-900">
          
        {songs.map((song) => {
          return (
            <div key={song.id}className="drop-shadow-10xl shadow-md shadow-white-300 mb-3 max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="px-2 max-w-sm bg-white rounded-bl-4xl rounded-tr-4xl shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="p-2 h-80 w-72 rounded-bl-3xl rounded-tr-3xl "
                    src={song.image}
                    alt="nft image"
                  />
                </a>
                <div className="px-5">
                  <a href="#">
                    <h5 className=" mb-3 text-center flex-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {song.name}
                    </h5>
                    <h6 className="text-center text-xl font-semibold tracking-tight text-orange-600">
                      by {song.artist}
                    </h6>
                    <h6 className="text-center text font- tracking-tight text-gray-900 dark:text-white">
                      floor price: 50 tokens
                    </h6>
                  </a>

                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                    <a
                      href="#"
                      className="text-white bg-blue-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      BUY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllSongs();
  return {
    props: {
      songs: data,
    },
  };
}