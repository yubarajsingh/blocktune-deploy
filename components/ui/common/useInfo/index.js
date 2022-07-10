
import { useAccount } from "@components/web3/hooks/useAccount";
import Image from "next/image";
import { SendToken } from "../../model";


export default function UseInfo() {
  const { account } = useAccount();
  return (
    <>
      <div className="max-w-full mx-auto overflow-hidden bg-gradient-to-t from-slate-900 to-slate-500">
        <Image
          className="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
          width="500"
          height="200px"
        />
        <div className="h-50 w-60 mx-auto py-3">
          <div className="block mx-auto my-4 relative h-20 w-20">
            <Image
              alt="profile"
              src="/profile.jpg"
              className=" object-cover rounded-full"
              height={800}
              width={800}
            />
          </div>
          <div className="flex flex-col text-slate-200 items-center justify-center">
            <span>Address : {account}</span>
          </div>
        </div>
        <section className="text-gray-600 body-font mx-auto ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div></div>

              <div className="mt-3 text-center place-items-center sm:mt-0 sm:ml-4 sm:text-left">
                <div>
                  Token Available:{}
                </div>
                <button 
                  className="block my-4 relative mx-auto border px-4 py-1 bg-[#0cc1e0] uppercase rounded font-medium tracking-wide 
        hover:bg-[#ffffff] hover:text-black transition duration-300"
                >
                  Send Tokens
                </button>
                
                <div className="mt-2">
                  <p className="text-center text-cyan-200">Account Address:</p>
                  <input className="flex flex-col text-slate-900 items-center justify-center" autoFocus='autofocus' placeholder="Account Address" type='text'/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
