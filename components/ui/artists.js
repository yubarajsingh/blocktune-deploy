/* eslint-disable react/no-unescaped-entities */




export default function Artists() {
    
  
    const wholeList=[
      {
        image :"a1.jpg",
        artist :"Resu",
        address: "0xa2367vd2367452xb7324x2386bx32xt690"
        
      
      },
      {
        image :"a2.jpg",
        artist :"sakyu",
        address: "0x452367vd2367452xb7324x2386bx32xt6x56"
      
      },
      {
        image :"a3.jpeg",
        artist :"Atif",
        address: "0xa2367vd2367452xb7324x2386bx32xt6x59"
      
      },
      {
        image :"a4.jpg",
        artist :"Arina",
        address: "0xa2367vd2367452xb7324x2386bx32xt600"
      
      },
      {
        image :"a5.jpg",
        artist :"Arjit",
        address: "0xa2367vd2367452xb7324x2386bx32xt609"
      
      },
      {
        image :"a6.jpg",
        artist :"Darshan",
        address: "0xa2367vd2367452xb7324x2386bx32xt6x23"
      
      },
     
     
    
  
    ];
  
  
   
    return (
     
      <>
      <div className=" py-3 bg-gray-700  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          wholeList.map((item,index)=>{
            return <div class="drop-shadow-10xl shadow-md shadow-white-300 mb-3 max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
               
              
                
            </div>
            <div class="flex flex-col items-center pb-10">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={item.image} alt="image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.artist}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{item.address}</span>
                <div class="flex mt-4 space-x-3 lg:mt-6">
                    <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore</a>
                    
                </div>
            </div>
        </div>
  
          })
        }
     
        </div>
      </>
    );
  }