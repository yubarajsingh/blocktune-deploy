/* eslint-disable react/no-unescaped-entities */




export default function index() {
    
  const wholeList=[
    {
      image :"nft1.png",
      artist :"christin",
      song :"Let me go",
      price : "10"
      
    
    },
    {
      image :"nft2.jpg",
      artist :"Samdsk",
      song : "Damm crazy ",
     price : "12.8"
    
    },
    {
      image :"nft4.png",
      artist :"Ozudr",
      song : "Let's rock & roll",
     price : "13.2"
    
    },
    {
      image :"nft1.png",
      artist :"christin",
      song :"Let me go",
      price : "10"
      
    
    },
    {
      image :"nft2.jpg",
      artist :"Samdsk",
      song : "Damm crazy ",
     price : "12.8"
    
    },
    {
      image :"nft4.png",
      artist :"Ozudr",
      song : "Let's rock & roll",
     price : "13.2"
    
    },
    {
      image :"nft4.png",
      artist :"christin",
      song :"Let me go",
      price : "10"
      
    
    },
    {
      image :"nft2.jpg",
      artist :"Samdsk",
      song : "Damm crazy ",
     price : "12.8"
    
    },
    {
      image :"nft1.png",
      artist :"Ozudr",
      song : "Let's rock & roll",
     price : "13.2"
    
    }
]


    return (
       
        <>
        <div className=" py-3 bg-gray-700  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          wholeList.map((item,index)=>{
            return <div class="drop-shadow-10xl shadow-md shadow-white-300 mb-3 max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
               
              
                
            </div>
            <div class="px-2 max-w-sm bg-white rounded-bl-4xl rounded-tr-4xl shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-bl-3xl rounded-tr-3xl " src={item.image} alt="nft image" />
    </a>
    <div class="px-5 pb-2">
        <a href="#">
            <h5 class=" text-center flex-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.song}</h5>
            <h6 class="text-center text-xl font-semibold tracking-tight text-blue-900 text-blue">by {item.artist}</h6>
            <h6 class="text-center text font- tracking-tight text-gray-900 dark:text-white">floor price: {item.price} eth</h6>
        </a>
       
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-white"></span>
            <a href="#" class="text-white bg-blue-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BUY</a>
        </div>
</div>
            </div>
        </div>
  
          })
        }
     
        </div>


      </>

        
    );
}

